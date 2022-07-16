import  {ReactComponent as Feedback} from '../../../../../assets/shared/Client/feedback-icon.svg'
import  {ReactComponent as BlueCloud} from '../../../../../assets/shared/Client/blueCloud.svg'

const CarouselItem2 = ({ item }) => {
  return (
    <div className='Client-feedback'>
              <div className='Client-image-name'>
                <img src={item.image} alt='image' className='Client-image'/>
                <h4 className='Client-name'>{item.name}</h4>
                <div className='Client-feedback-line'>{item.line}</div>
                <div className='Client-feedback-icon'>
                  <Feedback/>
                </div>
              </div>
              <div className='Client-feedback-text'>
                <p >{item.feedback}</p>
              </div>
              <div className='Client-feedback-logo'>
                <BlueCloud/>
                <h4>HostDiagram</h4>
              </div>
            </div>
  );
};

export default CarouselItem2;
