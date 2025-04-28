import { useState } from "react";

const HeroSection = () => {
  const [IsSubscribe, setIsSubscribe] = useState(false)
  const Subscribe = () => {
    setIsSubscribe(true)
  }
    return (
      <section className="h-full flex flex-col justify-center items-center px-4">
        <div className="text-center space-y-7">
          <p className="lg:text-[#717171] text-red-400 text-capitalize text-[14px]">
            ALL-IN-ONE MARKETING SOFTWARE
          </p>
          <h1 className="lg:text-[62px] text-[40px] font-bold leading-tight">
            Send emails, automate marketing, monetize content – in one place
          </h1>
          <p className="text-[18px] lg:text-black text-green-400">
            Grow your business and boost revenue with an easy, affordable platform
            that brings email,
            <br /> automation, online courses and paid newsletters together.
          </p>
  
            <button onClick={Subscribe} className="bg-[#fbe30c]  px-8 py-4 rounded-3xl font-bold w-fit hover:to-blue-700">
            { IsSubscribe ? 
            ("You've been Subscribed") : ("Start 30-day FREE trial")}
          </button>
          <p>Try us free | No credit card required | Cancel anytime</p>
        </div>
        <div>
          <p className="font-bold lg:text-[24px] text-[14px] p-9 text-center">Why GetResponse?</p>
        </div>
        <div className="font-bold lg:text-[60] text-[40px] flex mx-2 gap-5">
            <div>100%
              <p className="text-[14px] font-normal">average <b>list growth</b> for
                <br />all paid plans in the <b>first <br />30 days</b>
              </p>
            </div>
            <div>99%
              <p className="text-[14px] font-normal"><b>deliverability rate</b>
              <br />for 160+ countries</p>
            </div>
            <div>350k+
              <p className="text-[14px] font-normal"><b>customers worldwide</b>
                <br />trust us with their email
                <br />marketing</p>
            </div>
            <div>24/7
              <p className="text-[12px] font-normal">support from a <b>5-star <br />rated </b>
                Customer Success
                <br />Team</p>
            </div>
        </div>
        <div className="p-20 flex gap-4"> 
            <button className="bg-slate-100 border-2 hover:border-blue-400 rounded-xl p-10 text-left">
              <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1019/LogoECSPublishingGroup1-removebg-preview-1-e1721125158123.png" alt="ECS Logo" className="w-16 h-10 grayscale"/>
              <p className="lg:text-[24px] text-[14px] font-bold"><span className=" text-blue-400">10% list growth</span> & <br className="text-black"/>sales spike in tough <br />niche</p>
              <p className="font-medium py-10">it's nice that with GetResponse, we 
                <br />have the tools and integration we 
                <br />need within our budget.</p>
                <button className="py-2 px-6 bg-blue-400 hover:bg-yellow-300 hover:text-black rounded-xl text-white font-bold">Read case study &rarr;</button>
            </button>
            <button className="bg-slate-100 border-2 hover:border-blue-400 rounded-xl p-10 text-left">
              <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png" alt="Vision Logo" className="w-16 h-10 grayscale " />
              <p className="lg:text-[24px] text-[14px] font-bold p-md-5"><span className=" text-blue-400">75% of all public <br />sales</span> from <br />autoresponders</p>
              <p className="font-medium py-10">Together with GetResponse, we've 
                <br />been able to convince customers of 
                <br />need, culminating in compelling sales.
              </p>
              <button className="py-2 px-6 bg-blue-400 hover:bg-yellow-300 hover:text-black rounded-xl text-white font-bold">Read case study &rarr;</button>
            </button>
            <button className="bg-slate-100 border-2 hover:border-blue-400 rounded-xl p-10 text-left">
              <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png" alt="RedHot Logo" className="w-16 h-10 grayscale"/>
              <p className="lg:text-[24px] text-[14px] font-bold"><span className="text-blue-400">Up to $1,000</span> for <br />every 1,000 emails <br />sent</p>
              <p className="font-medium py-10">Regarding revenue contribution, the
                <br />email marketing channel is like free 
                <br />money for us.
              </p>
              <button className="py-2 px-6 bg-blue-400 hover:bg-yellow-300 hover:text-black rounded-xl text-white font-bold">Read case study &rarr;</button>
            </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  