import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination  } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import s from '../Photos/PhotoSlider/PhotosSlider.module.css'
import {connect} from 'react-redux';
import {deleteVoteThunk, delDogsThunk, DisplayingVotesThunk, voteThunk, setVotedDogsThunk} from '../../Redux/photosReducer'


SwiperCore.use([Pagination]);

const Disliked = (props) => {
  console.log(props)

  React.useEffect(()=>{
    props.setVotedDogsThunk(0);
    props.DisplayingVotesThunk(0);

    return ()=>{props.delDogsThunk()}
  }, [])

    return (<div>

        <h3 className={s.scroll_title}>You don't like these dogs </h3>
        <div className={s.scroll}>

        <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>

                {props.dogs.map(u => (<SwiperSlide key={u.id}>
                    <div className={s.slide}>
                        <div className={s.label}>{u.breeds?u.breeds.map(r => r.name):null}</div>
                        <img src={u.url} className={s.img} alt="ever" />
                        <div className={s.thumbs}>
                          
                            <button className={s.thumbDown  + ' ' + (props.dislikedDogsID.some(elem=> elem === u.id)?s.thumbDownActive : '')} 
                            onClick={ () => {props.dislikedDogsID.some(elem=> elem === u.id) ? props.deleteVoteThunk(u.id, 0) : props.voteThunk(u.id, 0)}}>{"\uD83D\uDC4E"}</button> 
                        </div>
                    </div>
                </SwiperSlide>))}

            </Swiper>
        </div>

    </div>)
}


const mapStateToProps = (state) => ({
  dogs: state.photosReducer.dogs,
  dislikedDogsID: state.photosReducer.dislikedDogsID.filter((elem)=>{
    if(elem === undefined) return false;
    return true
  }),
});

export default connect(mapStateToProps, {setVotedDogsThunk, deleteVoteThunk, delDogsThunk, DisplayingVotesThunk, voteThunk})(Disliked)