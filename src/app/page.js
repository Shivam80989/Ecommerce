"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for fetching data
import Hehe from '@/components/Hehe';
import { Header } from '@/components/Home/Header';
import Crouse from '@/components/Home/Crousel/Crouse';
import { Catagrie } from '@/components/Home/Catagries/Catagrie';
import Foot from '@/components/Home/Footer/Foot';

export default function ImageEditor() {
  

return(
    <div>
      <Header/>
     <Crouse/>
     <Catagrie/> 
      <Hehe/>
      <Foot/>
    </div>
  );
}
