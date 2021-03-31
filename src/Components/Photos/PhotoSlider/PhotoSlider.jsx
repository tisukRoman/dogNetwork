import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { connect } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import s from './PhotosSlider.module.css';
import { getDogsThunk, delDogsThunk, deleteVoteThunk, DisplayingVotesThunk, voteThunk } from '../../../Redux/photosReducer';

SwiperCore.use([Navigation]);



const PhotoSlider = (props) => {

    React.useEffect(() => {
        props.getDogsThunk();
        props.DisplayingVotesThunk(1);
        props.DisplayingVotesThunk(0);

        return () => {
            props.delDogsThunk();
        }
    }, [])

    return (<div>

        <h3 className={s.scroll_title}>Enjoy cool pictures of our doggies </h3>
        <div className={s.scroll}>

            <Swiper spaceBetween={20} slidesPerView={1} navigation>

                {props.dogs.map(u => (<SwiperSlide key={u.id}>
                    <div className={s.slide}>
                        <div className={s.label}>{u.breeds.map(r => r.name)}</div>
                        <img src={u.url} className={s.img} alt="ever" />
                        <div className={s.thumbs}>
                            <button className={s.thumbDown + ' ' + (props.dislikedDogsID.some(elem => elem === u.id) ? s.thumbDownActive : '')}
                                onClick={() => { props.dislikedDogsID.some(elem => elem === u.id) ? props.deleteVoteThunk(u.id) : props.voteThunk(u.id, 0) }}>{"\uD83D\uDC4E"}</button>

                            <button className={s.thumbUp + ' ' + (props.likedDogsID.some(elem => elem === u.id) ? s.thumbUpActive : '')}
                                onClick={() => { props.likedDogsID.some(elem => elem === u.id) ? props.deleteVoteThunk(u.id) : props.voteThunk(u.id, 1) }}>{"\uD83D\uDC4D"}</button>
                        </div>
                    </div>
                </SwiperSlide>))}

            </Swiper>
        </div>
        <div className={s.fetch_button} onClick={() => { props.getDogsThunk() }}>
            <p>LOAD MORE</p>
        </div>
    </div>)
}

const mapStateToProps = (state) => ({
    dogs: state.photosReducer.dogs,
    isFetching: state.photosReducer.isFetching,
    likedDogsID: state.photosReducer.likedDogsID.filter((elem)=>{
        if(elem === undefined) return false;
        return true
      }),
    dislikedDogsID: state.photosReducer.dislikedDogsID,
})

export default connect(mapStateToProps, { getDogsThunk, delDogsThunk, deleteVoteThunk, DisplayingVotesThunk, voteThunk })(PhotoSlider);