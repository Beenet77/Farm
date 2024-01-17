import {React , useState,useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
    const[detail, setDetail] = useState();
    const [productSound,setProductSound]=useState()
    
    const params = useParams();
    const getDetails = (params) =>{
    try {
        axios.get(`http://127.0.0.1:8000/products/1`).then(res=>{
            setDetail(res.data)
            
        })
        
    } catch (error) {
        
    }
    }
    useEffect(()=>{
        getDetails(params)
        let fetchSound=async()=>{
           let res=await fetch(`http://localhost:8000/generate_text_to_speech/${params.productId}`);
           let data=await res.json();
           setProductSound(data);
        }
        fetchSound();
    },[params])
    // console.log(params.productId)
    // console.log(detail)
    console.log(productSound?.audio_url);
  return (
    
    <>
    <Navbar/>
      {detail?(
        <>
        <audio  controls autoPlay  loop  >
         {/* <source src='../../../public/audio/1_ne.mp3'  type="audio/mpeg"/> */}
         <source src={`http//localhost:8000/${productSound?.audio_url}`}  type="audio/mpeg"/>
          {/* Your browser does not support the audio element. */}
       </audio>
        <div >
           <h1>
            {detail?.name}
            {detail?.description}
            {detail?.title}
            {detail?.image}


           </h1>
         </div>
        </>
        
      ):(
        <div className='w-screen h-screen flex justify-center items-center'>
          <h3 className='text-xl font-bold text-indego-950'>Loading...</h3>
        </div>
      )}
      
      
    <Footer/>
    
    </>
  )
}

export default ProductDetail