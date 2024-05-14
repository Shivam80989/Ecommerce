import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const Catagrie = () => {
  return (
    <div className=' md:ml-[120px] ml-7 mr-7 md:mr[0px]     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    '>
        <h1 className='font-semibold font-sans md:text-5xl text-3xl  mt-[50px] mb-[20px] text-gray-500'>Categries</h1>
       <div className='flex gap-7 rounded-xl  flex-col md:flex-row'>
        <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 340,  cursor:'pointer',width:390 }}
        image="https://www.nicekicks.com/files/2014/10/nike-lunar-ballistic-hyper-crimson.jpg"
        title="Shoes"
      />
      <CardContent className="cursor-pointer font-sans ">
        <Typography gutterBottom variant="h5" component="div" className=' hover:bg-gray-300  transition-colors text-base duration-300 md:text-2xl '>
          Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-xs md:text-sm'>
          Shoes, Snicker, High bottom 
        </Typography>
      </CardContent>
   
     </Card>  
      <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 340,  cursor:'pointer',width: 390}}
        image="https://images.summitmedia-digital.com/spotph/images/2019/07/10/male-accessories-640-1562754849.jpg"
        title="Accessories "
      />
      <CardContent className="cursor-pointer">
        <Typography gutterBottom variant="h5" component="div" className=" hover:bg-gray-300  transition-colors duration-300 text-base md:text-2xl">
          Accessories
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-xs md:text-sm'>
          Chain, Ringes, Watch, Cap
        </Typography>
      </CardContent>
   
    </Card> 
    <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 340,  cursor:'pointer',width: 390, fontFamily:'sans'}}
        image="https://imgix.bustle.com/uploads/image/2021/1/11/e4bba86f-94d3-4f69-8403-fcc8b24a29b2-screen-shot-2021-01-11-at-41240-pm.png?w=1000&h=1483&fit=crop&crop=faces&auto=format%2Ccompress"
        title=" Jeans "
      />
      <CardContent className="cursor-pointer ">
        <Typography gutterBottom variant="h5" component="div" className=" hover:bg-gray-300  transition-colors duration-300 text-base md:text-2xl" >
          Jeans
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-xs md:text-sm'>
            Baggy jeans, capri, skinny jeans 
        </Typography>
      </CardContent>
   
    </Card> 
    </div>

    <div className='flex gap-7 rounded-xl mt-[20px] flex flex-col md:flex-row'>
        <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 340,  cursor:'pointer',width:390}}
        image="https://techvideoblog.com/wp-content/uploads/2022/03/all-the-phones-wm.jpg"
        title="Phones"
      />
      <CardContent className="cursor-pointer">
        <Typography gutterBottom variant="h5" component="div" className=" hover:bg-gray-300  transition-colors duration-300 text-base md:text-2xl" >
          Phones
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-xs md:text-sm'>
          Iphone, Samsung, Nokia, Real me 
        </Typography>
      </CardContent>
   
     </Card>  
      <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 340,  cursor:'pointer',width: 390}}
        image="https://images5.alphacoders.com/641/thumb-1920-641463.jpg"
        title="Perfume"
      />
      <CardContent className="cursor-pointer">
        <Typography gutterBottom variant="h5" component="div" className=" hover:bg-gray-300  transition-colors duration-300 text-base md:text-2xl">
         Perfume
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-xs md:text-sm'>
        Dubai perfume, Zudio perfume, Fog
        </Typography>
      </CardContent>
   
    </Card> 
    <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 340,  cursor:'pointer',width: 390}}
        image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680817/64/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt"
        title="Tshirts"
      />
      <CardContent className="cursor-pointer">
        <Typography gutterBottom variant="h5" component="div" className=" hover:bg-gray-300  transition-colors duration-300 text-base md:text-2xl">
          Tshirts
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-xs md:text-sm'>
            Polo shirts, Tshirts, Losse shirt
        </Typography>
      </CardContent>
   
    </Card> 
    </div>
    </div>
  )
}
