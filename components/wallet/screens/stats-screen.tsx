/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @next/next/no-img-element */
// @ts-nocheck
'use client';
import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Calendar, 
  ChevronDown, 
  ChevronRight,
  Home, 
  FileText, 
  PieChart, 
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  X,
  ArrowUp,
  Info
} from 'lucide-react';

// ==========================================
// SVG Icons (Customized for high-fidelity)
// ==========================================
const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px]">
    <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#1677FF"/>
    <path d="M12.5 10H17.5C19.433 10 21 11.567 21 13.5C21 14.88 20.2 16.07 19.048 16.653C20.553 17.152 21.5 18.6 21.5 20.5C21.5 22.433 19.933 24 18 24H12.5V10Z" fill="white"/>
    <path d="M15 12.5V15.5H17.5C18.328 15.5 19 14.828 19 14C19 13.172 18.328 12.5 17.5 12.5H15Z" fill="#1677FF"/>
    <path d="M15 18V21.5H18C18.966 21.5 19.75 20.716 19.75 19.75C19.75 18.784 18.966 18 18 18H15Z" fill="#1677FF"/>
  </svg>
);

// List Icons
const ForkKnifeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-[14px] h-[14px] text-[#3a3a3c]"}>
    <path d="M11 2v9c0 1.1-.9 2-2 2H8v9H6v-9H5c-1.1 0-2-.9-2-2V2h2v7h2V2h2v7h2V2h2zm7 0h2v20h-2v-9c-2.2 0-4-1.8-4-4V2h2v7h2V2h2v7h2V2h2zm7 0h2v20h-2v-9c-2.2 0-4-1.8-4-4V2h2v7h2V2z"/>
  </svg>
);

const CarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-[14px] h-[14px] text-[#3a3a3c]"}>
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);

const BagIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-[14px] h-[14px] text-[#3a3a3c]"}>
    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
  </svg>
);

const TransferIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-[14px] h-[14px] text-[#3a3a3c]"}>
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H7v2h10.01v3L21 9z"/>
  </svg>
);

const TrendIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-[14px] h-[14px] text-[#3a3a3c]"}>
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

const CapIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-[14px] h-[14px] text-[#3a3a3c]"}>
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

const EllipsisIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-[14px] h-[14px] text-[#3a3a3c]"}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

// ==========================================
// Mock Data
// ==========================================
const BAR_CHART_DATA = [
  { month: '11月', in: 32.8, out: 5.6 },
  { month: '12月', in: 35.6, out: 6.1 },
  { month: '1月', in: 42.1, out: 6.8 },
  { month: '2月', in: 38.7, out: 5.9 },
  { month: '3月', in: 50.3, out: 6.3 },
  { month: '4月', in: 47.6, out: 7.1, isCurrent: true },
];

const PIE_CHART_DATA = [
  { name: '餐饮', color: '#4c78fe', percent: '31.8%' },
  { name: '交通', color: '#8862fe', percent: '20.4%' },
  { name: '购物', color: '#a78dfe', percent: '16.7%' },
  { name: '转账', color: '#f5ad41', percent: '13.5%' },
  { name: '理财', color: '#ffd24d', percent: '9.6%' },
  { name: '其他', color: '#c5cbe1', percent: '8.0%' },
];

const RANKING_DATA = [
  { rank: 1, name: '餐饮', amount: '2,260.35', percent: '31.8%', icon: <ForkKnifeIcon />, isRed: true, badgeBg: 'bg-[#fff1b8]', badgeText: 'text-[#fa8c16]', iconColor: 'text-[#3a3a3c]' },
  { rank: 2, name: '交通', amount: '1,451.70', percent: '20.4%', icon: <CarIcon />, badgeBg: 'bg-[#e6e8eb]', badgeText: 'text-[#8c8c8c]', iconColor: 'text-[#3a3a3c]' },
  { rank: 3, name: '购物', amount: '1,184.26', percent: '16.7%', icon: <BagIcon />, badgeBg: 'bg-[#ffe4cc]', badgeText: 'text-[#d46b08]', iconColor: 'text-[#3a3a3c]' },
  { rank: 4, name: '转账', amount: '961.20', percent: '13.5%', icon: <TransferIcon />, badgeBg: 'bg-[#f4f5f8]', badgeText: 'text-[#c7c7cc]', iconColor: 'text-[#3a3a3c]' },
  { rank: 5, name: '理财', amount: '682.10', percent: '9.6%', icon: <TrendIcon />, badgeBg: 'bg-[#f4f5f8]', badgeText: 'text-[#c7c7cc]', iconColor: 'text-[#3a3a3c]' },
];

const INSIGHT_MODAL_DATA = [
  { rank: 1, name: '餐饮', amount: '2,260.35', percent: '+18.6%', icon: <ForkKnifeIcon />, width: '100%', badgeBg: 'bg-[#fff1b8]', badgeText: 'text-[#fa8c16]' },
  { rank: 2, name: '购物', amount: '1,184.26', percent: '+17.3%', icon: <BagIcon />, width: '60%', badgeBg: 'bg-[#e6e8eb]', badgeText: 'text-[#8c8c8c]' },
  { rank: 3, name: '交通', amount: '1,451.70', percent: '+11.8%', icon: <CarIcon />, width: '45%', badgeBg: 'bg-[#ffe4cc]', badgeText: 'text-[#d46b08]' },
  { rank: 4, name: '转账', amount: '961.20', percent: '+8.7%', icon: <TransferIcon />, width: '35%', badgeBg: 'bg-[#f4f5f8]', badgeText: 'text-[#a1a1aa]' },
  { rank: 5, name: '教育', amount: '580.00', percent: '+6.3%', icon: <CapIcon />, width: '20%', badgeBg: 'bg-[#f4f5f8]', badgeText: 'text-[#a1a1aa]' },
];

const DETAIL_MODAL_DATA = [
  { name: '餐饮', amount: '2,260.35', percent: '31.8%', trend: '+18.6%', icon: <ForkKnifeIcon /> },
  { name: '交通', amount: '1,451.70', percent: '20.4%', trend: '+11.8%', icon: <CarIcon /> },
  { name: '购物', amount: '1,184.26', percent: '16.7%', trend: '+17.3%', icon: <BagIcon /> },
  { name: '转账', amount: '961.20', percent: '13.5%', trend: '+8.7%', icon: <TransferIcon /> },
  { name: '理财', amount: '682.10', percent: '9.6%', trend: '+3.2%', icon: <TrendIcon /> },
  { name: '其他', amount: '570.10', percent: '8.0%', trend: '+2.1%', icon: <EllipsisIcon /> },
];

// High-Fidelity SVG Donut Component with real 1.5% gaps
const DetailedSVGDonut = () => {
  const donutData = [
    { color: '#4c78fe', percent: 31.8 },
    { color: '#8862fe', percent: 20.4 },
    { color: '#a78dfe', percent: 16.7 },
    { color: '#f5ad41', percent: 13.5 },
    { color: '#ffd24d', percent: 9.6 },
    { color: '#e5e5ea', percent: 8.0 }, 
  ];
  
  let cumulativeOffset = 0;
  
  return (
    // Properly scaled viewBox ensures the donut is full-sized and perfectly crisp
    <svg viewBox="0 0 40 40" className="w-full h-full transform -rotate-90">
      {donutData.map((item, i) => {
        const gap = 1.5;
        const dash = item.percent - gap > 0 ? item.percent - gap : 0;
        const remainder = 100 - dash;
        
        const strokeDasharray = `${dash} ${remainder}`;
        const strokeDashoffset = -cumulativeOffset;
        cumulativeOffset += item.percent;

        return (
          <circle
            key={i}
            cx="20" cy="20" r="15.9155" // exact r for 100 circumference
            fill="transparent"
            stroke={item.color}
            strokeWidth="5" // Refined thin ring
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
          />
        );
      })}
    </svg>
  );
};


// ==========================================
// Page Component
// ==========================================
export function StatsScreen({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('月');
  const [isInsightModalOpen, setIsInsightModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  return (
    <div className="bg-[#f7f8fa] min-h-[932px] w-[430px] font-sans text-gray-900 pb-[100px] mx-auto relative overflow-x-hidden shadow-2xl">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .donut-chart {
          background: conic-gradient(
            from -20deg,
            #4c78fe 0% 31.8%,
            #8862fe 31.8% 52.2%,
            #a78dfe 52.2% 68.9%,
            #c5cbe1 68.9% 76.9%,
            #ffd24d 76.9% 86.5%,
            #f5ad41 86.5% 100%
          );
          border-radius: 50%;
          -webkit-mask: radial-gradient(transparent 58%, black 59%);
          mask: radial-gradient(transparent 58%, black 59%);
        }
      `}} />

      {/* Header */}
      <div className="px-[16px] pt-[52px] pb-[10px] flex items-center justify-between sticky top-0 z-[15] bg-[#f7f8fa]/95 backdrop-blur-md">
        <div className="flex items-center space-x-[6px]">
          <LogoIcon />
          <span className="text-[20px] font-bold text-[#1c1c1e] italic tracking-tight" style={{fontFamily: 'Helvetica Neue, Arial, sans-serif'}}>
            BitLedger <span className="text-[#1677ff]">Pro</span>
          </span>
        </div>
        <div className="flex items-center space-x-[16px]">
          <button className="active:opacity-60 transition-opacity">
            <Search className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} />
          </button>
          <button className="relative active:opacity-60 transition-opacity">
            <Bell className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} />
            <div className="absolute -top-[1px] right-[1px] w-[7px] h-[7px] bg-[#ff3b30] rounded-full border-[1.5px] border-[#f7f8fa]"></div>
          </button>
          <button className="w-[28px] h-[28px] rounded-full overflow-hidden flex items-center justify-center active:scale-95 transition-transform shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#1677ff]/10">
            {/* Custom generic avatar matching design style */}
            <div className="w-full h-full bg-gradient-to-b from-[#4a90e2] to-[#0052cc] flex items-center justify-center">
              <div className="w-[12px] h-[12px] bg-white/30 rounded-full blur-[1px]"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Filter Row */}
      <div className="px-[16px] mt-[8px] flex items-center justify-between">
        <button className="flex items-center space-x-[6px] bg-white border border-[#f0f0f0] h-[36px] px-[12px] rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:scale-95 transition-all">
          <Calendar className="w-[16px] h-[16px] text-[#8e8e93]" strokeWidth={2} />
          <span className="text-[14px] font-medium text-[#1c1c1e]">2026年4月</span>
          <ChevronDown className="w-[14px] h-[14px] text-[#8e8e93]" strokeWidth={2.5} />
        </button>

        <div className="flex bg-[#f4f5f8] rounded-[10px] p-[3px]">
          {['月', '年', '自定义'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[16px] py-[5px] text-[13px] rounded-[8px] transition-all ${
                activeTab === tab 
                  ? 'bg-white text-[#1677ff] font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-[#e5e5ea]' 
                  : 'text-[#8e8e93] font-medium active:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-[16px] mt-[16px] flex space-x-[10px]">
        {/* Expense Card */}
        <div className="flex-1 bg-white rounded-[16px] p-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative">
          <div className="text-[11px] text-[#8e8e93] mb-[4px] font-medium">本月支出 <span className="text-[9px] text-[#c7c7cc] ml-[2px] font-normal">(CNY)</span></div>
          <div className="text-[18px] font-bold text-[#ff4d4f] mb-[8px] leading-none">7,109.71</div>
          <div className="text-[10px] text-[#8e8e93] mb-[2px]">较上月</div>
          <div className="flex items-center text-[10px]">
            <span className="text-[#ff4d4f] flex items-center font-medium bg-[#fff1f0] px-[4px] py-[1px] rounded-[4px]">
               <ArrowUpRight className="w-[9px] h-[9px] mr-[2px]" strokeWidth={2.5} /> 13.2%
            </span>
          </div>
          <div className="absolute bottom-[12px] right-[12px] w-[28px] h-[28px] bg-[#fff1f0] rounded-[8px] flex items-center justify-center">
             <ArrowDownRight className="w-[16px] h-[16px] text-[#ff4d4f]" strokeWidth={2.5} />
          </div>
        </div>

        {/* Income Card */}
        <div className="flex-1 bg-white rounded-[16px] p-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative">
          <div className="text-[11px] text-[#8e8e93] mb-[4px] font-medium">本月收入 <span className="text-[9px] text-[#c7c7cc] ml-[2px] font-normal">(CNY)</span></div>
          <div className="text-[18px] font-bold text-[#34d399] mb-[8px] leading-none">47,556.16</div>
          <div className="text-[10px] text-[#8e8e93] mb-[2px]">较上月</div>
          <div className="flex items-center text-[10px]">
            <span className="text-[#34d399] flex items-center font-medium bg-[#ecfdf5] px-[4px] py-[1px] rounded-[4px]">
               <ArrowUpRight className="w-[9px] h-[9px] mr-[2px]" strokeWidth={2.5} /> 18.7%
            </span>
          </div>
          <div className="absolute bottom-[12px] right-[12px] w-[28px] h-[28px] bg-[#ecfdf5] rounded-[8px] flex items-center justify-center">
             <ArrowUpRight className="w-[16px] h-[16px] text-[#34d399]" strokeWidth={2.5} />
          </div>
        </div>

        {/* Balance Card */}
        <div className="flex-1 bg-white rounded-[16px] p-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative">
          <div className="text-[11px] text-[#8e8e93] mb-[4px] font-medium">本月结余 <span className="text-[9px] text-[#c7c7cc] ml-[2px] font-normal">(CNY)</span></div>
          <div className="text-[18px] font-bold text-[#1677ff] mb-[8px] leading-none">40,446.45</div>
          <div className="text-[10px] text-[#8e8e93] mb-[2px]">较上月</div>
          <div className="flex items-center text-[10px]">
            <span className="text-[#1677ff] flex items-center font-medium bg-[#e6f4ff] px-[4px] py-[1px] rounded-[4px]">
               <ArrowUpRight className="w-[9px] h-[9px] mr-[2px]" strokeWidth={2.5} /> 20.1%
            </span>
          </div>
          <div className="absolute bottom-[12px] right-[12px] w-[28px] h-[28px] bg-[#e6f4ff] rounded-[8px] flex items-center justify-center">
             <Wallet className="w-[14px] h-[14px] text-[#1677ff]" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="mx-[16px] mt-[16px] bg-white rounded-[20px] p-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#1c1c1e]">收支趋势</h2>
          <div className="flex items-center text-[12px] text-[#8e8e93] bg-[#f7f8fa] px-[8px] py-[4px] rounded-[6px]">
            本年 <ChevronDown className="w-[12px] h-[12px] ml-[2px]" strokeWidth={2} />
          </div>
        </div>

        <div className="flex items-center space-x-[16px] mb-[20px]">
          <div className="flex items-center text-[11px] text-[#8e8e93]">
            <div className="w-[6px] h-[6px] rounded-full bg-[#65d4a9] mr-[6px]"></div>
            收入 <span className="text-[9px] text-[#c7c7cc] ml-[2px]">(CNY)</span>
          </div>
          <div className="flex items-center text-[11px] text-[#8e8e93]">
            <div className="w-[6px] h-[6px] rounded-full bg-[#fa757e] mr-[6px]"></div>
            支出 <span className="text-[9px] text-[#c7c7cc] ml-[2px]">(CNY)</span>
          </div>
        </div>

        <div className="relative h-[180px] w-full">
          {/* Y-Axis Grid Lines & Labels */}
          {[80, 60, 40, 20, 0].map((val, i) => (
            <div key={val} className="absolute w-full flex items-center" style={{ bottom: `${(val / 80) * 100}%` }}>
              <span className="text-[10px] text-[#c7c7cc] w-[28px] -mt-[6px]">{val === 0 ? '0' : `${val}K`}</span>
              <div className="flex-1 border-t border-dashed border-[#f0f0f0] ml-[4px]"></div>
            </div>
          ))}

          {/* Chart Bars */}
          <div className="absolute inset-0 ml-[32px] flex justify-between px-[10px] items-end pb-[1px]">
            {BAR_CHART_DATA.map((item, idx) => {
              const inHeight = (item.in / 80) * 100;
              const outHeight = (item.out / 80) * 100;
              
              return (
                <div key={item.month} className="flex flex-col items-center flex-1 h-full relative z-10">
                  {/* Bars Container */}
                  <div className="absolute bottom-0 flex justify-between items-end h-full w-[32px]">
                    {/* Income Bar */}
                    <div className="relative w-[10px]" style={{ height: `${inHeight}%` }}>
                      <div className={`w-full h-full rounded-t-[3px] transition-all duration-500 ${item.isCurrent ? 'bg-[#4080ff]' : 'bg-[#65d4a9]'}`}></div>
                      {/* Label above bar */}
                      <div className={`absolute -top-[16px] left-1/2 transform -translate-x-1/2 text-[8px] font-semibold px-[3px] py-[1.5px] rounded-[3px] border whitespace-nowrap bg-white leading-none shadow-[0_1px_2px_rgba(0,0,0,0.05)] z-20 flex items-center justify-center
                        ${item.isCurrent ? 'border-[#4080ff] text-[#4080ff]' : 'border-[#65d4a9] text-[#65d4a9]'}
                      `}>
                        {item.in}K
                      </div>
                    </div>
                    {/* Expense Bar */}
                    <div className="relative w-[10px]" style={{ height: `${outHeight}%` }}>
                      <div className="w-full h-full bg-[#fa757e] rounded-t-[3px] transition-all duration-500"></div>
                      {/* Label above bar */}
                      <div className="absolute -top-[16px] left-1/2 transform -translate-x-1/2 text-[8px] font-semibold px-[3px] py-[1.5px] rounded-[3px] border border-[#fa757e] text-[#fa757e] whitespace-nowrap bg-white leading-none shadow-[0_1px_2px_rgba(0,0,0,0.05)] z-20 flex items-center justify-center">
                        {item.out}K
                      </div>
                    </div>
                  </div>
                  
                  {/* X-Axis Label */}
                  <div className={`absolute -bottom-[24px] text-[11px] font-medium ${item.isCurrent ? 'text-[#1677ff]' : 'text-[#8e8e93]'}`}>
                    {item.month}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Extra space for X-axis labels */}
        <div className="h-[24px]"></div>
      </div>

      {/* Grid Layout: Pie Chart & Ranking */}
      <div className="mx-[16px] mt-[16px] grid grid-cols-[175px_1fr] gap-[12px]">
        
        {/* Pie Chart Card */}
        <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
          <h2 className="text-[14px] font-bold text-[#1c1c1e] mb-[20px]">支出分类占比</h2>
          
          <div className="flex flex-col items-center flex-1 justify-center">
            {/* Donut Chart */}
            <div className="relative w-[116px] h-[116px] mb-[20px]">
              <div className="w-full h-full donut-chart transform rotate-[-15deg]"></div>
              
              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[14px] font-bold text-[#1c1c1e] leading-none mb-[4px]">7,109.71</span>
                <span className="text-[10px] text-[#8e8e93]">总支出</span>
              </div>
            </div>

            {/* Legend Grid */}
            <div className="w-full grid grid-cols-2 gap-y-[10px] gap-x-[8px] px-[2px]">
              {PIE_CHART_DATA.map((item) => (
                <div key={item.name} className="flex items-center text-[11px]">
                  <div className="w-[6px] h-[6px] rounded-full mr-[6px] shrink-0" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[#8e8e93] shrink-0 mr-auto">{item.name}</span>
                  <span className="text-[#3a3a3c] font-medium shrink-0 ml-[2px]">{item.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ranking List Card */}
        <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="flex items-center justify-between mb-[16px]">
            <h2 className="text-[14px] font-bold text-[#1c1c1e]">支出分类排行</h2>
            <button className="flex items-center text-[10px] text-[#8e8e93] active:opacity-60">
              查看全部 <ChevronRight className="w-[12px] h-[12px] ml-[2px]" strokeWidth={2} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-[14px]">
            {RANKING_DATA.map((item) => (
              <div key={item.rank} className="flex items-center w-full">
                {/* Rank Badge */}
                <div className={`w-[14px] h-[14px] rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${item.badgeBg} ${item.badgeText}`}>
                  {item.rank}
                </div>
                
                {/* Icon Badge */}
                <div className="w-[20px] h-[20px] rounded-full bg-[#f4f5f8] flex items-center justify-center shrink-0 ml-[6px]">
                  {React.cloneElement(item.icon, { className: `w-[11px] h-[11px] ${item.iconColor}` })}
                </div>
                
                {/* Name */}
                <span className="text-[11px] text-[#3a3a3c] font-medium ml-[6px] shrink-0">
                  {item.name}
                </span>
                
                {/* Flexible spacer prevents truncation */}
                <div className="flex-1 min-w-[2px]"></div>
                
                {/* Amount */}
                <span className="text-[12px] font-bold text-[#1c1c1e] tabular-nums shrink-0">
                  {item.amount}
                </span>
                
                {/* Percent */}
                <span className={`text-[10px] font-medium w-[32px] text-right shrink-0 tabular-nums ml-[4px] ${item.isRed ? 'text-[#ff4d4f]' : 'text-[#8e8e93]'}`}>
                  {item.percent}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Insight Banner */}
      <div onClick={() => setIsInsightModalOpen(true)} className="mx-[16px] mt-[16px] bg-gradient-to-r from-[#6b73ff] to-[#404cff] rounded-[20px] p-[16px] flex items-center shadow-[0_8px_20px_rgba(107,115,255,0.2)] cursor-pointer active:scale-[0.98] transition-transform z-10 relative">
        <div className="w-[40px] h-[40px] rounded-full bg-white/20 flex items-center justify-center shrink-0 mr-[12px]">
          <TrendingUp className="w-[20px] h-[20px] text-white" strokeWidth={2.5} />
        </div>
        <div className="flex-1">
          <div className="text-[14px] font-bold text-white mb-[4px]">
            本月支出较上月增加 <span className="text-[#ffb612]">13.2%</span>
          </div>
          <div className="text-[11px] text-white/80">
            主要增长来自 餐饮 (+18.6%) 和 购物 (+17.3%)
          </div>
        </div>
        <ChevronRight className="w-[18px] h-[18px] text-white/80 ml-[8px]" strokeWidth={2} />
      </div>

      {/* -------------------------------------------------------- */}
      {/* 1st Modal: Insight Bottom Sheet Modal (Floating)          */}
      {/* -------------------------------------------------------- */}
      {isInsightModalOpen && (
        // Added px-[12px] and pb-[20px] to make it a distinct floating container
        <div className="fixed inset-0 z-[300] flex justify-center items-end px-[12px] pb-[20px]">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200" onClick={() => setIsInsightModalOpen(false)}></div>
          
          {/* Floating Container */}
          <div className="relative w-full max-w-[430px] bg-white rounded-[24px] shadow-2xl animate-in slide-in-from-bottom duration-300 pb-[24px] flex flex-col h-auto">
            
            {/* Drag Handle */}
            <div className="w-[36px] h-[4px] bg-[#e5e5ea] rounded-full mx-auto mt-[12px] mb-[16px]"></div>
            
            {/* Header: Title & Close */}
            <div className="px-[20px] flex justify-between items-start">
               <div>
                  <h2 className="text-[18px] font-bold text-[#1c1c1e]">
                    本月支出较上月增加 <span className="text-[#ff4d4f]">13.2%</span>
                  </h2>
                  <p className="text-[12px] text-[#8e8e93] mt-[4px]">
                    主要增长来自 餐饮 (+18.6%) 和 购物 (+17.3%)
                  </p>
               </div>
               <button onClick={() => setIsInsightModalOpen(false)} className="p-[4px] active:bg-gray-100 rounded-full transition-colors mt-[-4px] mr-[-4px]">
                  <X className="w-[20px] h-[20px] text-[#8e8e93]" strokeWidth={2} />
               </button>
            </div>

            {/* Tabs & Date Picker */}
            <div className="flex items-center justify-between px-[20px] mt-[24px] mb-[20px]">
               <div className="flex items-center bg-[#f4f5f8] p-[3px] rounded-[10px] mr-[8px]">
                  <button className="text-[13px] font-semibold text-[#1677ff] bg-white border border-[#e5e5ea] shadow-[0_1px_4px_rgba(0,0,0,0.04)] px-[12px] py-[5px] rounded-[8px] whitespace-nowrap shrink-0 transition-all">支出分析</button>
                  <button className="text-[13px] font-medium text-[#8e8e93] px-[12px] py-[5px] rounded-[8px] whitespace-nowrap shrink-0 active:bg-gray-200 transition-colors">收入分析</button>
                  <button className="text-[13px] font-medium text-[#8e8e93] px-[12px] py-[5px] rounded-[8px] whitespace-nowrap shrink-0 active:bg-gray-200 transition-colors">对比分析</button>
                  <button className="text-[13px] font-medium text-[#8e8e93] px-[12px] py-[5px] rounded-[8px] whitespace-nowrap shrink-0 active:bg-gray-200 transition-colors">建议</button>
               </div>
               <button className="flex items-center bg-[#f4f5f8] border border-[#e5e5ea] px-[10px] py-[5px] rounded-[8px] shrink-0 active:scale-95 transition-transform">
                  <span className="text-[12px] font-medium text-[#1c1c1e]">2026年4月</span>
                  <ChevronDown className="w-[12px] h-[12px] text-[#8e8e93] ml-[4px]" strokeWidth={2.5} />
               </button>
            </div>

            {/* List Section Header */}
            <div className="flex justify-between items-center px-[20px] mb-[16px]">
               <span className="text-[13px] font-bold text-[#1c1c1e]">支出增长 Top 5</span>
               <span className="text-[11px] text-[#8e8e93]">较上月</span>
            </div>

            {/* List Items mapping */}
            <div className="flex flex-col space-y-[20px]">
               {INSIGHT_MODAL_DATA.map((item) => (
                  <div key={item.rank} className="flex items-center px-[20px] w-full">
                     {/* Rank Badge */}
                     <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${item.badgeBg} ${item.badgeText}`}>
                       {item.rank}
                     </div>
                     
                     {/* Icon */}
                     <div className="w-[26px] h-[26px] rounded-full bg-[#f4f5f8] flex items-center justify-center shrink-0 ml-[10px]">
                       {React.cloneElement(item.icon, { className: "w-[13px] h-[13px] text-[#3a3a3c]" })}
                     </div>

                     {/* Middle: Name + Progress Bar */}
                     <div className="flex-1 flex flex-col justify-center ml-[12px] mr-[16px]">
                       <span className="text-[14px] text-[#3a3a3c] font-medium leading-none">{item.name}</span>
                       <div className="h-[4px] bg-[#ff4d4f] rounded-full mt-[6px]" style={{ width: item.width }}></div>
                     </div>

                     {/* Right: Amount + Percent */}
                     <div className="flex items-center shrink-0">
                       <span className="text-[14px] font-bold text-[#1c1c1e] tabular-nums">{item.amount}</span>
                       <span className="text-[13px] font-medium text-[#ff4d4f] tabular-nums ml-[12px] w-[58px] text-right flex items-center justify-end">
                         {item.percent} <ArrowUp className="w-[12px] h-[12px] ml-[2px]" strokeWidth={3} />
                       </span>
                     </div>
                  </div>
               ))}
            </div>

            {/* Footer Button - Opening 2nd Modal */}
            <div className="px-[20px] mt-[32px]">
               <button onClick={() => setIsDetailModalOpen(true)} className="w-full py-[12px] bg-[#f8faff] text-[#1677ff] text-[14px] font-semibold rounded-[12px] active:bg-[#eef4ff] transition-colors">
                  查看支出分类详情
               </button>
            </div>
            
          </div>
        </div>
      )}

      {/* -------------------------------------------------------- */}
      {/* 2nd Modal: Detailed Category Analysis Modal (Floating)    */}
      {/* -------------------------------------------------------- */}
      {isDetailModalOpen && (
        // Changed to floating container with px-[12px] pb-[20px] instead of bottom-0 flush
        <div className="fixed inset-0 z-[400] flex justify-center items-end px-[12px] pb-[20px]">
          {/* Overlay to dim the previous modal/background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200" onClick={() => setIsDetailModalOpen(false)}></div>
          
          {/* Removed fixed h-[75vh], using h-auto for content fitting */}
          <div className="relative w-full max-w-[430px] bg-white rounded-[24px] shadow-2xl animate-in slide-in-from-bottom duration-300 pb-[24px] pt-[12px] px-[20px] flex flex-col h-auto">
            {/* Handle */}
            <div className="w-[36px] h-[4px] bg-[#e5e5ea] rounded-full mx-auto mb-[20px]"></div>
            
            {/* Header Layer */}
            <div className="relative">
               <button onClick={() => setIsDetailModalOpen(false)} className="absolute -top-[4px] right-0 p-[4px] active:bg-gray-100 rounded-full transition-colors">
                  <X className="w-[20px] h-[20px] text-[#8e8e93]" strokeWidth={2} />
               </button>
               
               <div className="flex justify-between items-end mb-[20px]">
                  <h2 className="text-[20px] font-bold text-[#1c1c1e] leading-none">支出分类详情</h2>
                  {/* Small Date Picker Below X */}
                  <div className="flex items-center text-[12px] text-[#3a3a3c] font-medium mr-[28px] mt-[4px]">
                     2026年4月 <ChevronDown className="w-[12px] h-[12px] ml-[2px] text-[#8e8e93]" strokeWidth={2.5} />
                  </div>
               </div>
            </div>

            {/* Segmented Control */}
            <div className="flex bg-[#f4f5f8] p-[3px] rounded-[10px] mb-[20px]">
               <button className="flex-1 text-[13px] font-semibold text-[#1677ff] bg-white border border-[#e5e5ea] shadow-[0_1px_4px_rgba(0,0,0,0.04)] py-[6px] rounded-[8px]">本月</button>
               <button className="flex-1 text-[13px] font-medium text-[#8e8e93] py-[6px]">较上月变化</button>
               <button className="flex-1 text-[13px] font-medium text-[#8e8e93] py-[6px]">占比</button>
               <button className="flex-1 text-[13px] font-medium text-[#8e8e93] py-[6px]">趋势</button>
            </div>

            {/* Content: SVG Donut & Highly Compact List (No Table) */}
            <div className="flex items-center">
               {/* Left: Beautiful Custom SVG Donut */}
               <div className="relative w-[110px] h-[110px] shrink-0 self-start mt-[16px]">
                  <DetailedSVGDonut />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-[15px] font-bold text-[#1c1c1e] leading-none mb-[4px]">7,109.71</span>
                     <span className="text-[9px] text-[#8e8e93]">总支出 (CNY)</span>
                  </div>
               </div>

               {/* Right: Compact Data Flex List */}
               <div className="flex-1 ml-[12px] flex flex-col">
                  {/* Header Row */}
                  <div className="flex items-center text-[10px] text-[#8e8e93] mb-[10px] px-[4px]">
                     <div className="w-[54px]">分类</div>
                     <div className="flex-1 text-right">金额 (CNY)</div>
                     <div className="w-[32px] text-right ml-[8px]">占比</div>
                     <div className="w-[45px] text-right ml-[8px]">较上月</div>
                  </div>
                  {/* Data Rows */}
                  <div className="flex flex-col space-y-[12px]">
                     {DETAIL_MODAL_DATA.map((row, i) => (
                        <div key={i} className="flex items-center px-[4px]">
                           <div className="w-[54px] flex items-center space-x-[6px]">
                              <div className="w-[18px] h-[18px] rounded-full bg-[#f4f5f8] flex items-center justify-center shrink-0">
                                 {React.cloneElement(row.icon, { className: "w-[10px] h-[10px] text-[#3a3a3c]" })}
                              </div>
                              <span className="text-[12px] font-medium text-[#1c1c1e] whitespace-nowrap">{row.name}</span>
                           </div>
                           <div className="flex-1 text-right text-[12px] font-medium text-[#1c1c1e] tabular-nums whitespace-nowrap">{row.amount}</div>
                           <div className="w-[32px] text-right text-[11px] font-medium text-[#8e8e93] tabular-nums whitespace-nowrap ml-[8px]">{row.percent}</div>
                           <div className="w-[45px] flex items-center justify-end text-[11px] font-medium text-[#ff4d4f] tabular-nums ml-[8px]">
                              {row.trend} <ArrowUp className="w-[9px] h-[9px] ml-[2px]" strokeWidth={3} />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Footer Note */}
            <div className="mt-[24px] pt-[16px] border-t border-[#f4f5f8] flex items-center text-[#8e8e93] text-[11px]">
               <Info className="w-[13px] h-[13px] mr-[6px]" strokeWidth={2}/>
               <span>数据已按所选统计周期过滤</span>
            </div>

          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-[#fdfdfd] border-t border-[#f0f0f0] flex justify-between items-center px-[40px] pt-[8px] pb-[32px] z-[200]">
        <button onClick={() => onTabChange?.('home')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <Home className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">首页</span>
        </button>
        <button onClick={() => onTabChange?.('bills')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <FileText className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">账单</span>
        </button>
        <button onClick={() => onTabChange?.('stats')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <div className="relative">
            <PieChart className="w-[22px] h-[22px] text-[#1677ff] fill-[#1677ff]" strokeWidth={1.5} />
            <div className="absolute -top-[2px] -right-[2px] w-[8px] h-[8px] bg-white rounded-full"></div>
            <div className="absolute -top-[2px] -right-[2px] w-[8px] h-[8px] text-[#1677ff] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[10px] h-[10px]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
          </div>
          <span className="text-[10px] mt-[4px] font-semibold text-[#1677ff]">统计</span>
        </button>
        <button onClick={() => onTabChange?.('assets')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <Wallet className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">资产</span>
        </button>
      </div>

    </div>
  );
}