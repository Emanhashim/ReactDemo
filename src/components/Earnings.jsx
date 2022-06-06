import React from 'react'
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./ReusableStyles";
import { BiWallet } from 'react-icons/bi';
const data = [
  { data: 4500 },
  {
    data: 5000,
  },
  {
    data: 4700,
  },
  {
    data: 4400,
  },
  {
    data: 4800,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6580,
  },
  {
    data: 6780,
  },
  {
    data: 6680,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 5900,
  },
  {
    data: 5700,
  },
  {
    data: 5500,
  },
  {
    data: 5300,
  },
  {
    data: 5100,
  },
  {
    data: 5090,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6780,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6700,
  },
  {
    data: 7000,
  },
  {
    data: 7300,
  },
  {
    data: 7500,
  },
  {
    data: 7700,
  },
  {
    data: 8090,
  },
  {
    data: 8190,
  },
  {
    data: 7990,
  },

  {
    data: 7700,
  },
  {
    data: 7500,
  },
  {
    data: 7300,
  },
  {
    data: 7000,
  },
  {
    data: 6700,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6780,
  },
  {
    data: 6300,
  },
  {
    data: 6000,
  },
  {
    data: 5800,
  },

  {
    data: 5490,
  },
  {
    data: 6000,
  },
  {
    data: 9000,
  },
  {
    data: 10000,
  },
  {
    data: 12682.4,
  },
];

export default function Earnings() {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt =JSON.parse(localStorage.getItem('jwt'));
  console.log(jwt)
  return (
    <Section>
    <div className="top">
      <div className="info">
        <h5>your current Balance  </h5>
        <h1>{user.balance}</h1>
        <BiWallet className='logo'/>
        <div className="growth">
        
          <span>+2.45%</span>
        </div>
      </div>
    </div>
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <Tooltip cursor={false} />
          <Area
            animationBegin={800}
            animationDuration={2000}
            type="monotone"
            dataKey="data"
            stroke="#ffc107"
            fill="#8068233e"
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Section>
  )
}
const Section=styled.section`
display: flex;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyle}
  padding: 2rem 0 0 0;
  .top{
    .info{
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
      gap: 0.3rem;
      h1{
        font-size: 2rem;
      }
       .logo{
        display: flex;
       
        background-color: black;
        border-radius: 3rem;
        font-size: 1.5rem;
      
       }
       .growth{
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &: hover{
          background-color: #ffc107;
          span{
            color: black;
          }

        }
        span{
          color: #ffc107;
        }
      }
       
    }
    
  }


.chart{
  height:70%;
  .recharts-default-tooltip{
    background-color:black !important;
    border-color:black !important;
  }
}
`;