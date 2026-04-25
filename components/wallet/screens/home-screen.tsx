/* eslint-disable @typescript-eslint/ban-ts-comment, @next/next/no-img-element */
// @ts-nocheck
'use client';
import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Calendar, 
  ChevronDown, 
  Eye, 
  ArrowUpRight, 
  ChevronRight,
  Home, 
  FileText, 
  PieChart, 
  Wallet,
  PenLine,
  BarChart2,
  PieChart as PieChartIcon,
  ArrowRightLeft,
  AlertTriangle
} from 'lucide-react';

// ==========================================
// SVG Icons
// ==========================================
const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px]">
    <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#1677FF"/>
    <path d="M12.5 10H17.5C19.433 10 21 11.567 21 13.5C21 14.88 20.2 16.07 19.048 16.653C20.553 17.152 21.5 18.6 21.5 20.5C21.5 22.433 19.933 24 18 24H12.5V10Z" fill="white"/>
    <path d="M15 12.5V15.5H17.5C18.328 15.5 19 14.828 19 14C19 13.172 18.328 12.5 17.5 12.5H15Z" fill="#1677FF"/>
    <path d="M15 18V21.5H18C18.966 21.5 19.75 20.716 19.75 19.75C19.75 18.784 18.966 18 18 18H15Z" fill="#1677FF"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white">
    <path d="M12 2C12 2 12 3.5 13.5 4.5C15 5.5 16.5 5 16.5 5C16.5 5 15.5 8 12.5 8C9.5 8 8.5 6 8.5 6C8.5 6 6.5 6.5 5.5 9C4.5 11.5 5 16.5 7 19.5C9 22.5 11.5 22.5 12.5 21.5C13.5 20.5 14.5 20.5 16.5 21.5C18.5 22.5 20.5 19.5 21.5 16.5C21.5 16.5 19 16 18 13.5C17 11 18.5 9 18.5 9C18.5 9 16.5 7 13.5 7.5C12.5 7.5 12 2 12 2Z" />
  </svg>
);

const OkxIcon = () => (
  <div className="w-[20px] h-[20px] bg-black rounded-full flex items-center justify-center">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px] text-white">
      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
    </svg>
  </div>
);

const BitgetIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#00e5c0]">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    <circle cx="12" cy="12" r="4" fill="black" />
  </svg>
);

const HuobiIcon = () => (
  <div className="w-[18px] h-[18px] bg-[#1853db] rounded-full flex items-center justify-center">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px] text-white">
       <path d="M12 2C12 2 8 8 8 12C8 16 11.5 19 12 19C12.5 19 16 16 16 12C16 8 12 2 12 2ZM12 16C11 16 10.5 15 10.5 14C10.5 13 12 10 12 10C12 10 13.5 13 13.5 14C13.5 15 13 16 12 16Z" />
    </svg>
  </div>
);

const HomeDonutChart = () => {
  const r = 14;
  return (
    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
      <circle cx="18" cy="18" r={r} fill="transparent" stroke="#e5e7eb" strokeWidth="6" strokeDasharray="8 92" strokeDashoffset="-92" strokeLinecap="butt"/>
      <circle cx="18" cy="18" r={r} fill="transparent" stroke="#f59e0b" strokeWidth="6" strokeDasharray="9.6 90.4" strokeDashoffset="-82.4" strokeLinecap="butt"/>
      <circle cx="18" cy="18" r={r} fill="transparent" stroke="#fbbf24" strokeWidth="6" strokeDasharray="13.5 86.5" strokeDashoffset="-68.9" strokeLinecap="butt"/>
      <circle cx="18" cy="18" r={r} fill="transparent" stroke="#10b981" strokeWidth="6" strokeDasharray="16.7 83.3" strokeDashoffset="-52.2" strokeLinecap="butt"/>
      <circle cx="18" cy="18" r={r} fill="transparent" stroke="#8b5cf6" strokeWidth="6" strokeDasharray="20.4 79.6" strokeDashoffset="-31.8" strokeLinecap="butt"/>
      <circle cx="18" cy="18" r={r} fill="transparent" stroke="#1677ff" strokeWidth="6" strokeDasharray="31.8 68.2" strokeDashoffset="0" strokeLinecap="butt"/>
      <circle cx="18" cy="18" r="11" fill="white" />
    </svg>
  );
};

// ==========================================
// Page Component
// ==========================================
export function HomeScreen({ onTabChange }) {
  const [isMessageCenterOpen, setIsMessageCenterOpen] = useState(false);

  return (
    <div className="bg-[#f4f5f8] min-h-[932px] w-[430px] font-sans text-gray-900 pb-[100px] mx-auto relative overflow-x-hidden shadow-2xl">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Top Header */}
      <div className="px-[16px] pt-[52px] pb-[10px] flex items-center justify-between sticky top-0 z-[15] bg-[#f4f5f8]/95 backdrop-blur-sm">
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
          <button onClick={() => setIsMessageCenterOpen(true)} className="relative active:opacity-60 transition-opacity">
            <Bell className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} />
            <div className="absolute -top-[1px] right-[1px] w-[7px] h-[7px] bg-[#ff3b30] rounded-full border-[1.5px] border-[#f4f5f8]"></div>
          </button>
          <button className="w-[28px] h-[28px] rounded-full bg-blue-100 overflow-hidden flex items-center justify-center active:scale-95 transition-transform shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      {/* Message Center Modal */}
      {isMessageCenterOpen && (
        <div className="fixed inset-0 z-[60] flex justify-center">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity" onClick={() => setIsMessageCenterOpen(false)}></div>
          <div className="relative w-full max-w-[430px] h-full pointer-events-none">
              <div className="absolute top-[86px] right-[16px] w-[320px] bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-[16px] pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="absolute -top-[6px] right-[58px] w-[14px] h-[14px] bg-white transform rotate-45 border-t border-l border-[#f0f0f0] rounded-sm"></div>
                  <div className="flex items-center text-[#5c5c5e] mb-[12px] px-[4px]">
                     <Bell className="w-[16px] h-[16px] mr-[6px]" strokeWidth={2} />
                     <span className="text-[14px] font-medium">消息中心</span>
                  </div>
                  <div className="space-y-[8px]">
                      <div className="flex items-start bg-white border border-[#f4f5f8] rounded-[16px] p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative cursor-pointer active:bg-gray-50 transition-colors">
                         <div className="w-[36px] h-[36px] rounded-full bg-[#fff7ed] flex items-center justify-center shrink-0 mr-[12px]">
                            <Calendar className="text-[#f59e0b] w-[18px] h-[18px]" strokeWidth={2.5} />
                         </div>
                         <div className="flex-1 pr-[16px]">
                            <div className="text-[13px] font-bold text-[#1c1c1e]">待处理事项</div>
                            <div className="text-[14px] text-[#f59e0b] font-medium mt-[2px] mb-[2px]">3天后 · 信用卡还款日</div>
                            <div className="text-[11px] text-[#8e8e93]">建议提前处理，避免逾期</div>
                         </div>
                         <div className="w-[6px] h-[6px] rounded-full bg-[#f59e0b] absolute top-[26px] right-[14px]"></div>
                      </div>
                      <div className="flex items-start bg-white border border-[#f4f5f8] rounded-[16px] p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative cursor-pointer active:bg-gray-50 transition-colors">
                         <div className="w-[36px] h-[36px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0 mr-[12px]">
                            <AlertTriangle className="text-[#ff3b30] w-[18px] h-[18px]" strokeWidth={2.5} />
                         </div>
                         <div className="flex-1 pr-[16px]">
                            <div className="text-[13px] font-bold text-[#1c1c1e]">预算预警通知</div>
                            <div className="text-[14px] text-[#ff3b30] font-medium mt-[2px] mb-[2px]">本月餐饮预算已使用 80%</div>
                            <div className="text-[11px] text-[#8e8e93]">建议控制本周支出</div>
                         </div>
                         <div className="w-[6px] h-[6px] rounded-full bg-[#ff3b30] absolute top-[26px] right-[14px]"></div>
                      </div>
                  </div>
                  <div className="mt-[16px] flex items-center justify-center pb-[4px]">
                      <button className="flex items-center text-[13px] font-medium text-[#1677ff] active:opacity-60 transition-opacity">
                         查看全部通知 <ChevronRight className="w-[14px] h-[14px] ml-[2px]" strokeWidth={2.5}/>
                      </button>
                  </div>
              </div>
          </div>
        </div>
      )}

      <div className="px-[16px] space-y-[14px]">
        {/* Date & Filter */}
        <div className="flex items-center justify-between pt-1">
          <button className="flex items-center space-x-[4px] bg-white h-[34px] px-[10px] rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] whitespace-nowrap active:scale-95 transition-transform">
            <Calendar className="w-[15px] h-[15px] text-[#8e8e93]" strokeWidth={2} />
            <span className="text-[13px] font-medium text-[#1c1c1e]">2026年4月</span>
            <ChevronDown className="w-[13px] h-[13px] text-[#8e8e93]" strokeWidth={2.5} />
          </button>
          <div className="flex bg-white rounded-[8px] p-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] shrink-0">
            <button className="flex h-[28px] w-[44px] items-center justify-center rounded-[6px] bg-[#f0f5ff] text-[12px] leading-none font-semibold text-[#1677ff]">月</button>
            <button className="flex h-[28px] w-[44px] items-center justify-center text-[12px] leading-none font-medium text-[#8e8e93] active:opacity-60 transition-opacity">年</button>
            <button className="flex h-[28px] w-[56px] items-center justify-center text-[12px] leading-none font-medium text-[#8e8e93] active:opacity-60 transition-opacity">自定义</button>
          </div>
        </div>

        {/* Main Balance Card */}
        <div className="bg-white rounded-[24px] p-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex items-center space-x-[6px] text-[#8e8e93] mb-[8px]">
            <span className="text-[13px]">本月结余 (CNY)</span>
            <Eye className="w-[16px] h-[16px]" strokeWidth={2} />
          </div>
          
          <div className="text-[40px] font-bold text-[#1677ff] tracking-tight leading-none mb-[12px]" style={{fontFamily: 'Helvetica Neue, Arial, sans-serif'}}>
            40,446.45
          </div>
          
          <div className="flex items-center text-[12px]">
            <span className="text-[#8e8e93] mr-[8px]">较上月</span>
            <span className="text-[#1677ff] flex items-center font-medium">
              <ArrowUpRight className="w-[12px] h-[12px] mr-[2px]" strokeWidth={2.5} /> 20.1%
            </span>
          </div>

          {/* Background Line Chart */}
          <div className="absolute bottom-0 right-0 w-[65%] h-[90px] pointer-events-none">
            <div className="absolute top-[4px] right-[18%] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] text-[#1677ff] font-semibold px-[8px] py-[3px] rounded-[6px] z-10 flex flex-col items-center">
              <div className="text-[#8e8e93] text-[9px] mb-[1px] font-normal scale-90">4月30日</div>
              <div className="text-[11px] leading-none">40,446.45</div>
            </div>
            
            <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="homeBlueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1677ff" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1677ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M-10,65 C20,65 30,75 50,60 C70,45 80,65 100,50 C120,35 140,55 160,25 C175,5 190,15 210,10" fill="none" stroke="#1677ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M-10,65 C20,65 30,75 50,60 C70,45 80,65 100,50 C120,35 140,55 160,25 C175,5 190,15 210,10 L210,80 L-10,80 Z" fill="url(#homeBlueGrad)" />
              <circle cx="160" cy="25" r="3.5" fill="#1677ff" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Income / Expense Cards */}
        <div className="grid grid-cols-2 gap-[14px]">
          {/* Income */}
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative">
            <div className="text-[12px] text-[#8e8e93] mb-[6px]">本月收入 (CNY)</div>
            <div className="text-[22px] font-bold text-[#10b981] mb-[8px] leading-none">47,556.16</div>
            <div className="flex items-center text-[11px]">
              <span className="text-[#8e8e93] mr-[6px]">较上月</span>
              <span className="text-[#10b981] flex items-center font-medium">
                <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" strokeWidth={3} /> 18.7%
              </span>
            </div>
            <div className="absolute bottom-[14px] right-[14px] w-[28px] h-[28px] bg-[#ecfdf5] rounded-[8px] flex items-center justify-center">
               <ArrowUpRight className="w-[18px] h-[18px] text-[#10b981]" strokeWidth={2.5} />
            </div>
          </div>
          
          {/* Expense */}
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative">
            <div className="text-[12px] text-[#8e8e93] mb-[6px]">本月支出 (CNY)</div>
            <div className="text-[22px] font-bold text-[#ff3b30] mb-[8px] leading-none">7,109.71</div>
            <div className="flex items-center text-[11px]">
              <span className="text-[#8e8e93] mr-[6px]">较上月</span>
              <span className="text-[#ff3b30] flex items-center font-medium">
                <ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" strokeWidth={3} /> 13.2%
              </span>
            </div>
            <div className="absolute bottom-[14px] right-[14px] w-[28px] h-[28px] bg-[#fff0f0] rounded-[8px] flex items-center justify-center">
               <ArrowUpRight className="w-[18px] h-[18px] text-[#ff3b30] transform rotate-90" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-between items-center px-[16px] py-[8px]">
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform">
            <div className="w-[46px] h-[46px] bg-[#1677ff] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(22,119,255,0.25)]">
              <PenLine className="w-[20px] h-[20px] text-white" strokeWidth={2} />
            </div>
            <span className="text-[12px] font-medium text-[#1c1c1e]">记一笔</span>
          </button>
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform">
            <div className="w-[46px] h-[46px] bg-[#10b981] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(16,185,129,0.25)]">
              <PieChartIcon className="w-[20px] h-[20px] text-white" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="text-[12px] font-medium text-[#1c1c1e]">预算</span>
          </button>
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform">
            <div className="w-[46px] h-[46px] bg-[#8b5cf6] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(139,92,246,0.25)]">
              <ArrowRightLeft className="w-[20px] h-[20px] text-white" strokeWidth={2} />
            </div>
            <span className="text-[12px] font-medium text-[#1c1c1e]">转账</span>
          </button>
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform">
            <div className="w-[46px] h-[46px] bg-[#f59e0b] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(245,158,11,0.25)]">
              <BarChart2 className="w-[20px] h-[20px] text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[12px] font-medium text-[#1c1c1e]">报表</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-[14px]">
          {/* Budget Progress */}
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col h-[150px]">
            <div className="flex justify-between items-center mb-[8px]">
              <span className="text-[14px] font-semibold text-[#1c1c1e]">预算进度</span>
              <div className="flex items-center text-[11px] text-[#8e8e93]">本月 <ChevronDown className="w-[12px] h-[12px] ml-[2px]" /></div>
            </div>
            <div className="text-[11px] text-[#8e8e93] mb-[12px]">
              总预算 <span className="font-semibold text-[#1c1c1e]">20,000.00</span> CNY
            </div>
            <div className="flex items-center space-x-[10px] mb-auto">
              <div className="flex-1 h-[6px] bg-[#f0f0f0] rounded-full overflow-hidden">
                <div className="h-full bg-[#1677ff] rounded-full" style={{ width: '53%' }}></div>
              </div>
              <span className="text-[13px] font-bold text-[#1677ff]">53%</span>
            </div>
            <div className="space-y-[6px]">
              <div className="flex justify-between items-center text-[11px]">
                <div className="flex items-center text-[#3a3a3c]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#1677ff] mr-[6px]"></div>已支出
                </div>
                <span className="font-semibold text-[#1c1c1e]">10,653.28</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <div className="flex items-center text-[#8e8e93]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#e5e5ea] mr-[6px]"></div>剩余额度
                </div>
                <span className="font-semibold text-[#3a3a3c]">9,346.72</span>
              </div>
            </div>
          </div>

          {/* Expense Categories */}
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col h-[150px]">
             <div className="flex justify-between items-center mb-[4px]">
              <span className="text-[14px] font-semibold text-[#1c1c1e]">支出分类概览</span>
              <div className="flex items-center text-[11px] text-[#8e8e93]">本月 <ChevronDown className="w-[12px] h-[12px] ml-[2px]" /></div>
            </div>
            <div className="flex items-center justify-between flex-1">
              <div className="w-[72px] h-[72px] relative ml-[-4px]">
                <HomeDonutChart />
              </div>
              <div className="flex flex-col justify-center space-y-[4px] w-[55%]">
                {[
                  { label: '餐饮', value: '31.8%', color: 'bg-[#1677ff]' },
                  { label: '交通', value: '20.4%', color: 'bg-[#8b5cf6]' },
                  { label: '购物', value: '16.7%', color: 'bg-[#10b981]' },
                  { label: '娱乐', value: '13.5%', color: 'bg-[#fbbf24]' },
                  { label: '理财', value: '9.6%', color: 'bg-[#f59e0b]' },
                  { label: '其他', value: '8.0%', color: 'bg-[#e5e7eb]' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] leading-tight">
                    <div className="flex items-center text-[#3a3a3c]">
                      <div className={`w-[5px] h-[5px] rounded-full mr-[6px] ${item.color}`}></div>
                      {item.label}
                    </div>
                    <span className="text-[#8e8e93]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="flex justify-between items-baseline p-[20px] pb-[8px]">
            <h3 className="text-[15px] font-bold text-[#1c1c1e]">最近交易</h3>
            <button className="flex items-center text-[12px] text-[#8e8e93] active:opacity-60 transition-opacity">
              查看全部 <ChevronRight className="w-[14px] h-[14px] ml-[2px]" strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex flex-col">
            <button className="w-full flex items-center px-[20px] py-[14px] border-b border-[#f4f5f8] active:bg-[#f9f9f9] transition-colors text-left">
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 bg-black"><AppleIcon /></div>
              <div className="flex-1 ml-[12px] flex justify-between items-center">
                 <div className="flex flex-col justify-center space-y-[2px]">
                    <span className="text-[14px] font-bold text-[#1c1c1e]">Apple Pay 自动记账</span>
                    <div className="flex items-center space-x-[6px]">
                      <span className="text-[10px] px-[4px] py-[1px] rounded-[4px] bg-[#e6f4ff] text-[#1677ff]">支出</span>
                      <span className="text-[11px] font-medium text-[#8e8e93]">购物</span>
                    </div>
                 </div>
                 <div className="flex flex-col items-end justify-center space-y-[2px]">
                    <span className="text-[15px] font-bold text-[#ff3b30]">-128.00</span>
                    <span className="text-[11px] font-medium text-[#8e8e93]">今天 09:38</span>
                 </div>
              </div>
            </button>
            <button className="w-full flex items-center px-[20px] py-[14px] border-b border-[#f4f5f8] active:bg-[#f9f9f9] transition-colors text-left">
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 bg-black"><OkxIcon /></div>
              <div className="flex-1 ml-[12px] flex justify-between items-center">
                 <div className="flex flex-col justify-center space-y-[2px]">
                    <span className="text-[14px] font-bold text-[#1c1c1e]">OKX 理财收益</span>
                    <div className="flex items-center space-x-[6px]">
                      <span className="text-[10px] px-[4px] py-[1px] rounded-[4px] bg-[#ecfdf5] text-[#10b981]">收入</span>
                      <span className="text-[11px] font-medium text-[#8e8e93]">理财</span>
                    </div>
                 </div>
                 <div className="flex flex-col items-end justify-center space-y-[2px]">
                    <span className="text-[15px] font-bold text-[#10b981]">+256.32</span>
                    <span className="text-[11px] font-medium text-[#8e8e93]">今天 08:21</span>
                 </div>
              </div>
            </button>
            <button className="w-full flex items-center px-[20px] py-[14px] border-b border-[#f4f5f8] active:bg-[#f9f9f9] transition-colors text-left">
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 bg-[#1853db]"><HuobiIcon /></div>
              <div className="flex-1 ml-[12px] flex justify-between items-center">
                 <div className="flex flex-col justify-center space-y-[2px]">
                    <span className="text-[14px] font-bold text-[#1c1c1e]">火币 理财收益</span>
                    <div className="flex items-center space-x-[6px]">
                      <span className="text-[10px] px-[4px] py-[1px] rounded-[4px] bg-[#ecfdf5] text-[#10b981]">收入</span>
                      <span className="text-[11px] font-medium text-[#8e8e93]">理财</span>
                    </div>
                 </div>
                 <div className="flex flex-col items-end justify-center space-y-[2px]">
                    <span className="text-[15px] font-bold text-[#10b981]">+512.00</span>
                    <span className="text-[11px] font-medium text-[#8e8e93]">昨天 21:16</span>
                 </div>
              </div>
            </button>
            <button className="w-full flex items-center px-[20px] py-[14px] active:bg-[#f9f9f9] transition-colors text-left">
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"><BitgetIcon /></div>
              <div className="flex-1 ml-[12px] flex justify-between items-center">
                 <div className="flex flex-col justify-center space-y-[2px]">
                    <span className="text-[14px] font-bold text-[#1c1c1e]">Bitget 理财收益</span>
                    <div className="flex items-center space-x-[6px]">
                      <span className="text-[10px] px-[4px] py-[1px] rounded-[4px] bg-[#ecfdf5] text-[#10b981]">收入</span>
                      <span className="text-[11px] font-medium text-[#8e8e93]">理财</span>
                    </div>
                 </div>
                 <div className="flex flex-col items-end justify-center space-y-[2px]">
                    <span className="text-[15px] font-bold text-[#10b981]">+320.50</span>
                    <span className="text-[11px] font-medium text-[#8e8e93]">昨天 18:42</span>
                 </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-[#fdfdfd] border-t border-[#f0f0f0] flex justify-between items-center px-[40px] pt-[8px] pb-[max(16px,env(safe-area-inset-bottom))] z-[200]">
        <button onClick={() => onTabChange?.('home')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <Home className="w-[22px] h-[22px] text-[#1677ff] fill-[#1677ff]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-semibold text-[#1677ff]">首页</span>
        </button>
        <button onClick={() => onTabChange?.('bills')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <FileText className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">账单</span>
        </button>
        <button onClick={() => onTabChange?.('stats')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <PieChart className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">统计</span>
        </button>
        <button onClick={() => onTabChange?.('assets')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <Wallet className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">资产</span>
        </button>
      </div>
    </div>
  );
}
