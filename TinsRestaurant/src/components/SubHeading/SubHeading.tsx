import SpoonImage from '../../assets/spoon.png'

type SubHeadingProps = {
  title: string;
};


const SubHeading = ({ title }: SubHeadingProps ) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className="p__cormorant">{title}</p>
    <img src={SpoonImage} alt='spoon' className="spoon__img"/>
  </div>
);

export default SubHeading;
