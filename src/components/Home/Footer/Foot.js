"use client"
import React from "react";
// Import any necessary images or icons here if needed
import { CiFacebook, CiTwitter ,CiYoutube} from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";



export default function Foot() {
  return (
    <div>
      <div className="md:px-32 px-8 md:pt-10 pt-3 lg:mt-4 mt-2 bg-gray-200 flex flex-col md:flex-row  md:gap-20 gap-6">
        <div>
          <FooterSection
            title="ONLINE SHOPPING"
            items={[
              "Mens",
              "Womens",
              "Kids", 
              "Home & living",
              "Beauty",
              "Gift cards",
              "Myntra insider"
            ]}
          />
          <FooterSection
            title="USEFUL LINKS"
            items={[
              "Blog",
              "Career",
              "Site map",
              "Corporate information",
              "Whitehap",
              "Cleartrip"
            ]}
          />
        </div>

        <FooterSection
          title="CUSTOMER POLICIES"
          items={[
            "Contact us",
            "FAQ",
            "T & C",
            "Term of use",
            "Track Orders",
            "Shipping",
            "Cancellation",
            "Returns",
            "Privacy policy",
            "Grievance offer"
          ]}
        />

        <div>
          <FooterSection
            title="EXPERIENCE MYNTRA APP ON MOBILE"
            items={[]} // Add any relevant items here
          />
          <div className="text-xs font-bold md:py-1 ">
            KEEP IN TOUCH
            <div className="md:py-4 py-2 flex gap-8 text-2xl text-gray-950 cursor-pointer">
            <CiFacebook />
            <CiTwitter />
            <FaInstagram />
            <CiYoutube /> 
            </div>
          </div>
        </div>

        <div className="text-black font-semibold">
          <div className="flex">
            <h4>100% ORIGINAL guarantee for all products at xyz.com</h4>
          </div>
          <div className="flex md:py-7 ">
            <p>Return within 14 days of receiving your order</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="text-xs font-bold bg-gray-200 md:px-32 px-9 py-4 md:py-0 hover:underline text-chocolate  ">
          POPULAR SEARCH
          <div className="text-slate-500 text-base">
            Kurta | Pajma | Lungi | Watches | Boat
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer section component
function FooterSection({ title, items }) {
  return (
    <div className="text-xs font-bold py-1 ">
      {title}
      <ul className="text-slate-500 text-base py-3">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

