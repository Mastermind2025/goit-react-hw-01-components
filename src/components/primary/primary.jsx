import css from './primary.module.css';
// import images from 'user.json';

// export const Primary = ({ img }) =>{
// 	return
// <img src={}   />
// };

export const Title =({text}) =>{
    return <h1 className={css.title}>{text}</h1>
};