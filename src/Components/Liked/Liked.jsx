import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination  } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import s from '../Photos/PhotoSlider/PhotosSlider.module.css'
import {connect} from 'react-redux';
import {deleteVoteThunk, delDogsThunk, DisplayingVotesThunk, voteThunk, setVotedDogsThunk} from '../../Redux/photosReducer'


SwiperCore.use([Pagination]);

const Liked = (props) => {
  console.log(props)

  React.useEffect(()=>{
    props.setVotedDogsThunk(1);
    props.DisplayingVotesThunk(1);

    return ()=>{props.delDogsThunk()}
  }, [])

    return (<div>

        <h3 className={s.scroll_title}>Here are all the images you liked</h3>
        <div className={s.scroll}>

        <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>

                {props.dogs.map(u => (<SwiperSlide key={u.id}>
                    <div className={s.slide}>
                        <div className={s.label}>{u.breeds?u.breeds.map(r => r.name):null}</div>
                        <img src={u.url} className={s.img} alt="ever" />
                        <div className={s.thumbs}>
                          
                            <button className={s.thumbUp  + ' ' + (props.likedDogsID.some(elem=> elem === u.id)?s.thumbUpActive : '')} 
                            onClick={ () => {props.likedDogsID.some(elem=> elem === u.id) ? props.deleteVoteThunk(u.id, 1) : props.voteThunk(u.id, 1)}}>{"\uD83D\uDC4D"}</button> 
                        </div>
                    </div>
                </SwiperSlide>))}

            </Swiper>
        </div>

    </div>)
}


const mapStateToProps = (state) => ({
  dogs: state.photosReducer.dogs,
  likedDogsID: state.photosReducer.likedDogsID.filter((elem)=>{
    if(elem === undefined) return false;
    return true
  }),
});

export default connect(mapStateToProps, {setVotedDogsThunk, deleteVoteThunk, delDogsThunk, DisplayingVotesThunk, voteThunk})(Liked)