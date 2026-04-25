/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @next/next/no-img-element */
// @ts-nocheck
'use client';
import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Eye, 
  Info,
  ChevronDown,
  ChevronRight,
  Home, 
  FileText, 
  PieChart, 
  Wallet,
  Landmark,
  ArrowRightLeft,
  Banknote,
  Calendar,
  AlertTriangle,
  X,
  Check,
  Plus,
  CreditCard,
  MoreHorizontal
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

const MashreqLogoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]">
    <path d="M12 2C17.52 2 22 6.48 22 12c0 1.66-.41 3.22-1.14 4.6l-5.6-3.23c.47-.85.74-1.84.74-2.87 0-3.31-2.69-6-6-6-1.03 0-2.02.27-2.87.74L3.9 1.64C5.28.91 6.84.5 8.5.5h3.5z" fill="#f37021"/>
    <path d="M2.5 8.5c-.91 1.38-1.5 2.94-1.5 4.6 0 5.52 4.48 10 10 10 1.66 0 3.22-.59 4.6-1.5l-3.23-5.6c-.85.47-1.84.74-2.87.74-3.31 0-6-2.69-6-6 0-1.03.27-2.02.74-2.87L1.01 8.5z" fill="#ffb612"/>
  </svg>
);

const CCBLogo = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none">
    <circle cx="12" cy="12" r="11" fill="#003B90" />
    <circle cx="12" cy="12" r="8" fill="white" />
    <circle cx="12" cy="12" r="5" fill="#003B90" />
    <path d="M 12 7 L 17 12 L 12 17 L 7 12 Z" fill="white" />
  </svg>
);

const AlipayLogo = () => (
  <div className="w-[18px] h-[18px] bg-[#1677ff] rounded-full text-white font-bold text-[11px] flex items-center justify-center leading-none" style={{ fontFamily: 'sans-serif' }}>支</div>
);

const WeChatLogo = () => (
  <div className="w-[20px] h-[20px] bg-[#07c160] rounded-full flex items-center justify-center relative">
    <div className="w-[10px] h-[8px] bg-white rounded-full absolute top-[5px] left-[3px] shadow-sm"></div>
    <div className="w-[7px] h-[5px] bg-white rounded-full absolute bottom-[4px] right-[3px] shadow-sm"></div>
  </div>
);

const OkxIcon = ({ size = 20, innerSize = 13 }) => (
  <div className={`bg-black rounded-[6px] flex items-center justify-center shrink-0`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-white" style={{ width: innerSize, height: innerSize }}>
      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
    </svg>
  </div>
);

const BinanceLogo = ({ size = 20 }) => (
  <div className={`bg-[#fcd535] rounded-[6px] flex items-center justify-center shrink-0`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" fill="#1e2329" style={{ width: size * 0.6, height: size * 0.6 }}>
      <path d="M12 2l-5 5 2 2 3-3 3 3 2-2-5-5zm0 20l5-5-2-2-3 3-3-3-2 2 5 5zm-7-7l-3-3 3-3 2 2-3 3 3 3-2 2zm14 0l3-3-3-3-2 2 3 3-3 3 2 2zM12 9l-3 3 3 3 3-3-3-3z"/>
    </svg>
  </div>
);

const BybitIcon = ({ size = 20 }) => (
  <div className={`bg-[#121214] rounded-[6px] flex items-center justify-center shrink-0`} style={{ width: size, height: size }}>
    <span className="text-white font-bold tracking-tighter uppercase" style={{ fontSize: size * 0.3 }}>BYBIT</span>
  </div>
);

const BitgetIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#00e5c0] shrink-0">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    <circle cx="12" cy="12" r="4" fill="black" />
  </svg>
);

const GateIoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] text-[#0d6efd] shrink-0">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="45 15" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="4" fill="currentColor"/>
  </svg>
);

const KuCoinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] text-[#24ae8f] shrink-0">
    <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" fill="currentColor" opacity="0.2"/>
    <path d="M7 8V16L12 13L17 16V8L12 11L7 8Z" fill="currentColor"/>
  </svg>
);

const MexcIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] text-[#2152f3] shrink-0">
    <path d="M3 18L12 6L21 18H16L12 11.5L8 18H3Z" fill="currentColor"/>
  </svg>
);

const HuobiIcon = () => (
  <div className="w-[20px] h-[20px] bg-[#1853db] rounded-full flex items-center justify-center shrink-0">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px] text-white">
       <path d="M12 2C12 2 8 8 8 12C8 16 11.5 19 12 19C12.5 19 16 16 16 12C16 8 12 2 12 2ZM12 16C11 16 10.5 15 10.5 14C10.5 13 12 10 12 10C12 10 13.5 13 13.5 14C13.5 15 13 16 12 16Z" />
    </svg>
  </div>
);

const CashIcon = () => (
  <div className="w-[18px] h-[18px] bg-[#e6f4ff] border border-[#52c41a] rounded-[4px] flex items-center justify-center">
    <div className="w-[9px] h-[5px] border border-[#52c41a] rounded-[2px] flex items-center justify-center">
       <div className="w-[3px] h-[1.5px] bg-[#52c41a] rounded-full"></div>
    </div>
  </div>
);

// Crypto & Currency specific icons for the Detail modal
const TetherIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0">
    <circle cx="12" cy="12" r="12" fill="#26A17B" />
    <path d="M13.25 10.25V17.5h-2.5v-7.25H7v-2.5h10v2.5h-3.75z" fill="white" />
  </svg>
);

const BitcoinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0">
    <circle cx="12" cy="12" r="12" fill="#F7931A" />
    <path d="M16.5 12.3c.4-.6.6-1.3.6-2.1 0-2.2-1.6-3.4-4.5-3.4H8v11h4.8c3.2 0 5-1.4 5-3.6 0-1.2-.5-2.2-1.3-2.9zM10.2 8.5h2.2c1.4 0 2.2.6 2.2 1.6 0 1.1-.8 1.7-2.3 1.7h-2.1V8.5zm2.5 7.6h-2.5v-3.5h2.6c1.6 0 2.5.7 2.5 1.8 0 1.2-.9 1.7-2.6 1.7z" fill="white" />
  </svg>
);

const EthereumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0">
    <circle cx="12" cy="12" r="12" fill="#627EEA" />
    <path d="M11.8 4L7 11.9l4.8 2.8 4.8-2.8L11.8 4zm0 15.5l-4.8-6.7 4.8 2.8 4.8-2.8-4.8 6.7z" fill="white" opacity="0.8"/>
    <path d="M11.8 14.7V4l-4.8 7.9 4.8 2.8z" fill="white" />
  </svg>
);

const CNYIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0">
    <circle cx="12" cy="12" r="12" fill="#E60012" />
    <text x="12" y="16.5" fontSize="13" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">¥</text>
  </svg>
);

const ClearInputIcon = () => (
  <svg viewBox="0 0 16 16" className="w-[16px] h-[16px] text-[#c7c7cc]" fill="currentColor">
    <circle cx="8" cy="8" r="8" />
    <path d="M10.5 5.5L5.5 10.5M5.5 5.5L10.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Add Account Specific Icons
const HexagonCryptoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] text-[#f59e0b]">
    <path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 7L16.3301 9.5V14.5L12 17L7.66987 14.5V9.5L12 7Z" fill="currentColor"/>
  </svg>
);

const AssetsDonutChart = () => {
  const r = 15.9154943;
  return (
    <svg viewBox="0 0 38 38" className="w-full h-full transform -rotate-90">
      <circle cx="19" cy="19" r={r} fill="transparent" stroke="#1677ff" strokeWidth="5.5" strokeDasharray="44.5 55.5" strokeDashoffset="0" strokeLinecap="butt"/>
      <circle cx="19" cy="19" r={r} fill="transparent" stroke="#7dd3fc" strokeWidth="5.5" strokeDasharray="24.9 75.1" strokeDashoffset="-45.3" strokeLinecap="butt"/>
      <circle cx="19" cy="19" r={r} fill="transparent" stroke="#a78bfa" strokeWidth="5.5" strokeDasharray="15.3 84.7" strokeDashoffset="-71.0" strokeLinecap="butt"/>
      <circle cx="19" cy="19" r={r} fill="transparent" stroke="#fcd34d" strokeWidth="5.5" strokeDasharray="5.5 94.5" strokeDashoffset="-87.1" strokeLinecap="butt"/>
      <circle cx="19" cy="19" r={r} fill="transparent" stroke="#d1d5db" strokeWidth="5.5" strokeDasharray="5.8 94.2" strokeDashoffset="-93.4" strokeLinecap="butt"/>
    </svg>
  );
};

// ==========================================
// Reusable Rows
// ==========================================
const AccountRow = ({ icon, name, balance, onClick }) => (
  <button 
    className="w-full flex items-center justify-between active:opacity-60 bg-transparent rounded-md transition-colors"
    onClick={onClick}
  >
    <div className="flex items-center space-x-[6px] min-w-0 flex-1 pr-[8px]">
      <div className="shrink-0 flex items-center justify-center">{icon}</div>
      <span className="text-[12px] font-medium text-[#5c5c5e] truncate">{name}</span>
    </div>
    <div className="flex items-center shrink-0">
      <span className="text-[12px] font-semibold text-[#1c1c1e]">{balance}</span>
      <ChevronRight className="w-[12px] h-[12px] text-[#c7c7cc] ml-[2px]" strokeWidth={2.5} />
    </div>
  </button>
);

const QuickAddRow = ({ icon, name, type, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between py-[12px] border-b border-[#f4f5f8] last:border-0 active:opacity-60 transition-opacity"
  >
    <div className="flex items-center space-x-[12px]">
      <div className="w-[24px] h-[24px] rounded-[6px] flex items-center justify-center overflow-hidden shrink-0">
        {icon}
      </div>
      <span className="text-[14px] font-medium text-[#1c1c1e]">{name}</span>
    </div>
    <div className="flex items-center shrink-0">
      <span className="text-[12px] text-[#8e8e93]">{type}</span>
      <ChevronRight className="w-[14px] h-[14px] text-[#c7c7cc] ml-[4px]" strokeWidth={2.5} />
    </div>
  </button>
);

// Toggle Switch Component
const ToggleSwitch = ({ checked, onChange }) => (
  <div 
    className={`w-[46px] h-[28px] rounded-full p-[2px] transition-colors duration-300 ease-in-out cursor-pointer shrink-0 ${checked ? 'bg-[#1677ff]' : 'bg-[#e5e5ea]'}`}
    onClick={onChange}
  >
     <div className={`w-[24px] h-[24px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-[18px]' : 'translate-x-0'}`}></div>
  </div>
);

// ==========================================
// Page Component
// ==========================================
export function AssetsScreen({ onTabChange }) {
  const [isMessageCenterOpen, setIsMessageCenterOpen] = useState(false);
  
  // Modals State
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  const [isAddExchangeModalOpen, setIsAddExchangeModalOpen] = useState(false);
  const [isAccountDetailModalOpen, setIsAccountDetailModalOpen] = useState(false);
  
  // Detail Modal State
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USDT');
  const [accountBalance, setAccountBalance] = useState('');
  const [isAdjustOnly, setIsAdjustOnly] = useState(true);

  // New Add Exchange Form State
  const [exchangeSelected, setExchangeSelected] = useState('OKX');
  const [apiConnected, setApiConnected] = useState(false);
  const [aprConfigEnabled, setAprConfigEnabled] = useState(true);

  const currenciesList = [
    { id: 'USDT', icon: <TetherIcon />, label: 'USDT' },
    { id: 'BTC', icon: <BitcoinIcon />, label: 'BTC' },
    { id: 'ETH', icon: <EthereumIcon />, label: 'ETH' },
    { id: 'CNY', icon: <CNYIcon />, label: 'CNY' },
  ];

  const handleOpenAccountDetail = (accountData) => {
    setSelectedAccount(accountData);
    setAccountBalance(accountData.balance.replace(/,/g, ''));
    setSelectedCurrency(accountData.currency || 'USDT');
    setIsAccountDetailModalOpen(true);
  };

  const handleOpenAddExchange = (defaultExchange = 'OKX') => {
    setExchangeSelected(defaultExchange);
    setIsAddAccountModalOpen(false); // Close previous modal
    setIsAddExchangeModalOpen(true); // Open configuration modal
  };

  return (
    <div className="bg-[#f4f5f8] min-h-[932px] w-[430px] font-sans text-gray-900 pb-[100px] mx-auto relative overflow-hidden shadow-2xl">
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
          <button className="active:opacity-60 transition-opacity"><Search className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} /></button>
          <button onClick={() => setIsMessageCenterOpen(true)} className="relative active:opacity-60 transition-opacity">
            <Bell className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} />
            <div className="absolute -top-[1px] right-[1px] w-[7px] h-[7px] bg-[#ff3b30] rounded-full border-[1.5px] border-[#f4f5f8]"></div>
          </button>
          <button className="w-[28px] h-[28px] rounded-full bg-blue-100 overflow-hidden flex items-center justify-center active:scale-95 transition-transform shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      {/* Page Title Row */}
      <div className="px-[16px] flex items-center justify-between mt-[6px]">
        <div className="flex items-center space-x-[6px]">
          <h1 className="text-[22px] font-bold text-[#1c1c1e]">资产</h1>
          <Eye className="w-[18px] h-[18px] text-[#8e8e93]" strokeWidth={2} />
        </div>
        <button 
          onClick={() => setIsAddAccountModalOpen(true)}
          className="flex items-center space-x-[4px] bg-[#1677ff] px-[12px] py-[6px] rounded-full active:scale-95 transition-transform shadow-[0_4px_10px_rgba(22,119,255,0.25)]"
        >
          <Plus className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
          <span className="text-[13px] font-bold text-white">添加账户</span>
        </button>
      </div>

      <div className="px-[16px] mt-[14px] space-y-[14px] overflow-y-auto h-full pb-[120px] hide-scrollbar">
        
        {/* Total Assets Card */}
        <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex justify-between items-start mb-[2px]">
            <div className="flex items-center space-x-[4px] text-[#8e8e93]">
              <span className="text-[12px]">总资产 (估值)</span>
              <Info className="w-[12px] h-[12px]" strokeWidth={2} />
            </div>
            <div className="flex bg-[#f4f5f8] rounded-[8px] p-[2px]">
              <button className="h-[28px] w-[44px] text-[12px] leading-none font-medium text-[#8e8e93] active:opacity-60">1天</button>
              <button className="h-[28px] w-[44px] text-[12px] leading-none font-medium text-[#8e8e93] active:opacity-60">7天</button>
              <button className="h-[28px] w-[44px] text-[12px] leading-none font-semibold text-[#1677ff] bg-white rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">30天</button>
              <button className="h-[28px] w-[56px] text-[12px] leading-none font-medium text-[#8e8e93] active:opacity-60">自定义</button>
            </div>
          </div>
          
          <div className="text-[32px] font-bold text-[#1c1c1e] tracking-tight leading-none mb-[8px]" style={{fontFamily: 'Helvetica Neue, Arial, sans-serif'}}>
            128,946.38 <span className="text-[14px] font-semibold text-[#3a3a3c] ml-[2px]">AED</span>
          </div>
          
          <div className="flex flex-col mb-[30px]">
             <div className="flex items-center space-x-[4px] text-[#8e8e93] mb-[2px]">
               <span className="text-[11px]">今日变化</span>
               <Info className="w-[11px] h-[11px]" strokeWidth={2} />
             </div>
             <div className="text-[13px] font-semibold text-[#10b981]">+7,718.23 AED (+6.34%)</div>
          </div>

          <div className="absolute bottom-0 right-0 w-[65%] h-[85px] pointer-events-none">
            <svg viewBox="0 0 200 85" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1677ff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#1677ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M-10,75 C10,65 30,55 50,65 C70,75 90,45 110,55 C130,65 150,20 170,30 C185,38 195,15 210,5 L210,85 L-10,85 Z" fill="url(#chartGrad)" />
              <path d="M-10,75 C10,65 30,55 50,65 C70,75 90,45 110,55 C130,65 150,20 170,30 C185,38 195,15 210,5" fill="none" stroke="#1677ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Asset Distribution Card */}
        <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
          <div className="flex justify-between items-center mb-[16px]">
             <span className="text-[14px] font-bold text-[#1c1c1e]">资产分布 <span className="text-[11px] font-normal text-[#8e8e93]">(占比)</span></span>
             <button className="flex items-center text-[12px] text-[#8e8e93] active:opacity-60 transition-opacity">查看详情 <ChevronRight className="w-[14px] h-[14px] ml-[2px]" strokeWidth={2.5}/></button>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-[110px] h-[110px] relative shrink-0">
               <AssetsDonutChart />
               <div className="absolute inset-0 flex flex-col items-center justify-center pt-[2px]">
                  <span className="text-[11px] font-bold text-[#1c1c1e] tracking-tight">128,946.38</span>
                  <span className="text-[9px] font-semibold text-[#8e8e93]">AED</span>
               </div>
            </div>

            <div className="flex-1 ml-[16px] flex flex-col space-y-[8px]">
               {[
                 { name: '银行账户', pct: '45.3%', val: '58,486.81 AED', color: 'bg-[#1677ff]' },
                 { name: '交易所资产', pct: '25.7%', val: '33,196.20 AED', color: 'bg-[#7dd3fc]' },
                 { name: '电子钱包', pct: '16.1%', val: '20,764.31 AED', color: 'bg-[#a78bfa]' },
                 { name: '现金', pct: '6.3%', val: '8,129.00 AED', color: 'bg-[#fcd34d]' },
                 { name: '其他', pct: '6.6%', val: '8,370.06 AED', color: 'bg-[#d1d5db]' },
               ].map((item, i) => (
                 <div key={i} className="grid grid-cols-[10px_64px_34px_1fr] items-center gap-[4px]">
                    <div className={`w-[6px] h-[6px] rounded-full ${item.color}`}></div>
                    <span className="text-[11px] text-[#5c5c5e] whitespace-nowrap">{item.name}</span>
                    <span className="text-[11px] text-[#8e8e93] text-right">{item.pct}</span>
                    <span className="text-[11px] font-medium text-[#3a3a3c] text-right whitespace-nowrap">{item.val}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Account 2x2 Grid */}
        <div className="grid grid-cols-2 gap-[12px]">
          
          <div className="bg-white rounded-[16px] p-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col h-[145px] overflow-hidden">
             <div className="flex items-center justify-between border-b border-[#f4f5f8] pb-[8px] mb-[12px] shrink-0">
                <div className="flex items-center space-x-[4px]">
                   <Landmark className="w-[14px] h-[14px] text-[#1677ff]" strokeWidth={2.5} />
                   <span className="text-[13px] font-bold text-[#3a3a3c]">银行账户</span>
                </div>
                <span className="text-[12px] font-semibold text-[#1677ff]">58,486.81</span>
             </div>
             <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar flex-1 w-full pb-[2px]">
                <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-[14px]">
                  <AccountRow 
                    icon={<MashreqLogoIcon />} name="Mashreq Bank" balance="39,256.54" 
                    onClick={() => handleOpenAccountDetail({ name: 'Mashreq Bank', sub: '储蓄账户 · 5821', icon: <MashreqLogoIcon />, balance: '39,256.54', currency: 'AED' })} 
                  />
                  <AccountRow 
                    icon={<CCBLogo />} name="中国建设银行" balance="19,230.27" 
                    onClick={() => handleOpenAccountDetail({ name: '中国建设银行', sub: '借记卡 · 8899', icon: <CCBLogo />, balance: '19,230.27', currency: 'CNY' })} 
                  />
                </div>
             </div>
          </div>

          <div className="bg-white rounded-[16px] p-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col h-[145px] overflow-hidden">
             <div className="flex items-center justify-between border-b border-[#f4f5f8] pb-[8px] mb-[12px] shrink-0">
                <div className="flex items-center space-x-[4px]">
                   <Wallet className="w-[14px] h-[14px] text-[#1677ff]" strokeWidth={2.5} />
                   <span className="text-[13px] font-bold text-[#3a3a3c]">电子钱包</span>
                </div>
                <span className="text-[12px] font-semibold text-[#1677ff]">20,764.31</span>
             </div>
             <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar flex-1 w-full pb-[2px]">
               <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-[14px]">
                  <AccountRow 
                    icon={<AlipayLogo />} name="支付宝" balance="12,450.80" 
                    onClick={() => handleOpenAccountDetail({ name: '支付宝', sub: '余额及余额宝', icon: <AlipayLogo />, balance: '12,450.80', currency: 'CNY' })} 
                  />
                  <AccountRow 
                    icon={<WeChatLogo />} name="微信" balance="8,313.51" 
                    onClick={() => handleOpenAccountDetail({ name: '微信', sub: '零钱', icon: <WeChatLogo />, balance: '8,313.51', currency: 'CNY' })} 
                  />
               </div>
             </div>
          </div>

          <div className="bg-white rounded-[16px] p-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col h-[145px] overflow-hidden">
             <div className="flex items-center justify-between border-b border-[#f4f5f8] pb-[8px] mb-[12px] shrink-0">
                <div className="flex items-center space-x-[4px]">
                   <ArrowRightLeft className="w-[14px] h-[14px] text-[#1677ff]" strokeWidth={2.5} />
                   <span className="text-[13px] font-bold text-[#3a3a3c]">交易所资产</span>
                </div>
                <span className="text-[12px] font-semibold text-[#1677ff]">33,196.20</span>
             </div>
             <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar flex-1 w-full pb-[2px]">
                <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-[10px]">
                  <AccountRow 
                    icon={<OkxIcon size={20} innerSize={13} />} name="OKX" balance="12,845.68" 
                    onClick={() => handleOpenAccountDetail({ name: 'OKX 交易所账户', sub: '现货账户 · ADCB **** 1234', icon: <OkxIcon size={48} innerSize={30} />, balance: '12,845.68', currency: 'USDT' })} 
                  />
                  <AccountRow 
                    icon={<BinanceLogo size={20} />} name="币安" balance="11,237.41" 
                    onClick={() => handleOpenAccountDetail({ name: '币安 交易所账户', sub: '资金账户', icon: <BinanceLogo size={48} />, balance: '11,237.41', currency: 'USDT' })} 
                  />
                  <AccountRow 
                    icon={<BitgetIcon />} name="Bitget" balance="9,113.11" 
                    onClick={() => handleOpenAccountDetail({ name: 'Bitget 交易所账户', sub: '现货账户', icon: <div className="transform scale-[2.4]"><BitgetIcon /></div>, balance: '9,113.11', currency: 'USDT' })} 
                  />
                </div>
                <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-[10px] pl-[8px]">
                  <AccountRow 
                    icon={<HuobiIcon />} name="火币" balance="8,500.00" 
                    onClick={() => handleOpenAccountDetail({ name: '火币 交易所账户', sub: '现货账户', icon: <div className="transform scale-[2.4]"><HuobiIcon /></div>, balance: '8,500.00', currency: 'USDT' })} 
                  />
                </div>
             </div>
          </div>

          <div className="bg-white rounded-[16px] p-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col h-[145px] overflow-hidden">
             <div className="flex items-center justify-between border-b border-[#f4f5f8] pb-[8px] mb-[12px] shrink-0">
                <div className="flex items-center space-x-[4px]">
                   <Banknote className="w-[14px] h-[14px] text-[#1677ff]" strokeWidth={2.5} />
                   <span className="text-[13px] font-bold text-[#3a3a3c]">现金</span>
                </div>
                <span className="text-[12px] font-semibold text-[#1677ff]">8,129.00</span>
             </div>
             <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar flex-1 w-full pb-[2px]">
                <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-[14px]">
                  <AccountRow 
                    icon={<CashIcon />} name="现金 (AED)" balance="8,129.00" 
                    onClick={() => handleOpenAccountDetail({ name: '现金 (AED)', sub: '钱包现金', icon: <div className="transform scale-[2.4]"><CashIcon /></div>, balance: '8,129.00', currency: 'AED' })} 
                  />
                </div>
             </div>
          </div>

        </div>

        {/* Recent Changes List */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden mt-[16px]">
          <div className="flex justify-between items-center p-[16px] pb-[8px]">
             <span className="text-[14px] font-bold text-[#1c1c1e]">最近变动</span>
             <button className="flex items-center text-[12px] text-[#8e8e93] active:opacity-60 transition-opacity">
               查看全部 <ChevronRight className="w-[14px] h-[14px] ml-[2px]" strokeWidth={2.5} />
             </button>
          </div>

          <div className="flex flex-col">
            <div className="w-full flex items-center px-[16px] py-[12px] border-b border-[#f4f5f8] bg-white cursor-pointer active:bg-[#f9f9f9] transition-colors">
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"><MashreqLogoIcon /></div>
              <div className="flex-1 flex flex-col justify-center ml-[12px] py-[2px]">
                 <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold text-[#1c1c1e] truncate">Mashreq Bank</span>
                    <div className="grid grid-cols-[70px_40px_60px] gap-0 items-center shrink-0">
                       <span className="text-[14px] font-bold text-[#10b981] text-right tracking-tight">+5,000.00</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-center">AED</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-right">今天 09:23</span>
                    </div>
                 </div>
                 <div className="text-[11px] font-medium text-[#8e8e93] mt-[1px]">存款</div>
              </div>
            </div>

            <div className="w-full flex items-center px-[16px] py-[12px] border-b border-[#f4f5f8] bg-white cursor-pointer active:bg-[#f9f9f9] transition-colors">
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"><WeChatLogo /></div>
              <div className="flex-1 flex flex-col justify-center ml-[12px] py-[2px]">
                 <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold text-[#1c1c1e] truncate">微信 → 支付宝</span>
                    <div className="grid grid-cols-[70px_40px_60px] gap-0 items-center shrink-0">
                       <span className="text-[14px] font-bold text-[#ff3b30] text-right tracking-tight">-200.00</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-center">CNY</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-right">今天 08:45</span>
                    </div>
                 </div>
                 <div className="text-[11px] font-medium text-[#8e8e93] mt-[1px]">转入支付宝</div>
              </div>
            </div>
            
            <div className="w-full flex items-center px-[16px] py-[12px] border-b border-[#f4f5f8] bg-white cursor-pointer active:bg-[#f9f9f9] transition-colors">
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"><OkxIcon size={20} innerSize={13} /></div>
              <div className="flex-1 flex flex-col justify-center ml-[12px] py-[2px]">
                 <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold text-[#1c1c1e] truncate">OKX</span>
                    <div className="grid grid-cols-[70px_40px_60px] gap-0 items-center shrink-0">
                       <span className="text-[14px] font-bold text-[#10b981] text-right tracking-tight">+28.74</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-center">USDT</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-right">昨天 22:16</span>
                    </div>
                 </div>
                 <div className="text-[11px] font-medium text-[#8e8e93] mt-[1px]">现货交易收益</div>
              </div>
            </div>

            <div className="w-full flex items-center px-[16px] py-[12px] bg-white cursor-pointer active:bg-[#f9f9f9] transition-colors">
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"><BinanceLogo size={20} /></div>
              <div className="flex-1 flex flex-col justify-center ml-[12px] py-[2px]">
                 <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold text-[#1c1c1e] truncate">币安</span>
                    <div className="grid grid-cols-[70px_40px_60px] gap-0 items-center shrink-0">
                       <span className="text-[14px] font-bold text-[#10b981] text-right tracking-tight">+500.00</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-center">USDT</span>
                       <span className="text-[11px] font-medium text-[#8e8e93] text-right">昨天 20:35</span>
                    </div>
                 </div>
                 <div className="text-[11px] font-medium text-[#8e8e93] mt-[1px]">充值</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-[#fdfdfd] border-t border-[#f0f0f0] flex justify-between items-center px-[40px] pt-[8px] pb-[max(16px,env(safe-area-inset-bottom))] z-[20]">
        <button onClick={() => onTabChange?.('home')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <Home className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">首页</span>
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
          <Wallet className="w-[22px] h-[22px] text-[#1677ff] fill-[#1677ff]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-semibold text-[#1677ff]">资产</span>
        </button>
      </div>


      {/* ======================================================= */}
      {/* 1. ADD ACCOUNT MODAL (Choose Type) */}
      {/* ======================================================= */}
      {isAddAccountModalOpen && (
        <div className="fixed inset-0 z-[120] flex justify-center items-center px-[20px]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity" onClick={() => setIsAddAccountModalOpen(false)}></div>
          <div className="relative w-full max-w-[390px] bg-white rounded-[24px] p-[20px] shadow-2xl animate-in zoom-in-95 fade-in duration-200 ease-out">
            <div className="flex justify-between items-center mb-[20px]">
              <h2 className="text-[18px] font-bold text-[#1c1c1e]">添加账户</h2>
              <button onClick={() => setIsAddAccountModalOpen(false)} className="w-[28px] h-[28px] flex items-center justify-center rounded-full active:bg-[#f0f0f0] transition-colors">
                <X className="w-[20px] h-[20px] text-[#5c5c5e]" strokeWidth={2} />
              </button>
            </div>

            <div className="mb-[24px]">
              <h3 className="text-[14px] font-bold text-[#5c5c5e] mb-[12px]">选择账户类型</h3>
              <div className="grid grid-cols-2 gap-[10px]">
                <div className="border border-[#f0f0f0] rounded-[12px] py-[12px] flex items-center justify-center space-x-[6px] active:bg-[#f9f9f9] transition-colors cursor-pointer">
                  <Landmark className="w-[16px] h-[16px] text-[#1677ff]" strokeWidth={2.5}/>
                  <span className="text-[13px] font-medium text-[#1c1c1e]">银行账户</span>
                </div>
                {/* TRIGGER 交易所账户 CONFIG */}
                <div 
                  onClick={() => handleOpenAddExchange()} 
                  className="border border-[#f0f0f0] rounded-[12px] py-[12px] flex items-center justify-center space-x-[6px] active:bg-[#f9f9f9] transition-colors cursor-pointer"
                >
                  <HexagonCryptoIcon />
                  <span className="text-[13px] font-medium text-[#1c1c1e]">交易所账户</span>
                </div>
                <div className="border border-[#f0f0f0] rounded-[12px] py-[12px] flex items-center justify-center space-x-[6px] active:bg-[#f9f9f9] transition-colors cursor-pointer">
                  <Wallet className="w-[16px] h-[16px] text-[#10b981]" strokeWidth={2.5}/>
                  <span className="text-[13px] font-medium text-[#1c1c1e]">电子钱包</span>
                </div>
                <div className="border border-[#f0f0f0] rounded-[12px] py-[12px] flex items-center justify-center space-x-[6px] active:bg-[#f9f9f9] transition-colors cursor-pointer">
                  <Banknote className="w-[16px] h-[16px] text-[#22c55e]" strokeWidth={2.5}/>
                  <span className="text-[13px] font-medium text-[#1c1c1e]">现金账户</span>
                </div>
                <div className="border border-[#f0f0f0] rounded-[12px] py-[12px] flex items-center justify-center space-x-[6px] active:bg-[#f9f9f9] transition-colors cursor-pointer">
                  <CreditCard className="w-[16px] h-[16px] text-[#8b5cf6]" strokeWidth={2.5}/>
                  <span className="text-[13px] font-medium text-[#1c1c1e]">信用卡</span>
                </div>
                <div className="border border-[#f0f0f0] rounded-[12px] py-[12px] flex items-center justify-center space-x-[6px] active:bg-[#f9f9f9] transition-colors cursor-pointer">
                  <div className="w-[16px] h-[16px] bg-[#c7c7cc] rounded-full flex items-center justify-center">
                    <MoreHorizontal className="w-[12px] h-[12px] text-white" strokeWidth={3}/>
                  </div>
                  <span className="text-[13px] font-medium text-[#1c1c1e]">其他账户</span>
                </div>
              </div>
            </div>

            <div className="mb-[20px]">
              <h3 className="text-[14px] font-bold text-[#5c5c5e] mb-[8px]">快速添加</h3>
              <div className="flex flex-col">
                <QuickAddRow icon={<OkxIcon size={24} innerSize={16}/>} name="OKX" type="交易所账户" onClick={() => handleOpenAddExchange('OKX')} />
                <QuickAddRow icon={<BinanceLogo size={24}/>} name="币安 Binance" type="交易所账户" onClick={() => handleOpenAddExchange('Binance')} />
                <QuickAddRow icon={<BybitIcon size={24}/>} name="Bybit" type="交易所账户" onClick={() => handleOpenAddExchange('Bybit')} />
                <QuickAddRow icon={<div className="w-[24px] h-[24px] bg-[#1677ff] flex items-center justify-center"><span className="text-white text-[14px] font-bold leading-none">支</span></div>} name="支付宝" type="电子钱包" />
                <QuickAddRow icon={<div className="w-[24px] h-[24px] bg-[#07c160] flex items-center justify-center relative"><div className="w-[12px] h-[9px] bg-white rounded-full absolute top-[6px] left-[4px]"></div><div className="w-[8.5px] h-[6.5px] bg-white rounded-full absolute bottom-[4.5px] right-[3px]"></div></div>} name="微信钱包" type="电子钱包" />
              </div>
            </div>

            <button className="w-full py-[14px] bg-[#f0f6ff] rounded-[14px] text-[15px] font-bold text-[#1677ff] active:bg-[#e6f0ff] transition-colors mt-[4px]">
              自定义账户
            </button>
          </div>
        </div>
      )}


      {/* ======================================================= */}
      {/* 2. ADD EXCHANGE MODAL (Configuration Form) - New */}
      {/* ======================================================= */}
      {isAddExchangeModalOpen && (
        <div className="fixed inset-0 z-[130] flex justify-center items-center px-[20px]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity" onClick={() => setIsAddExchangeModalOpen(false)}></div>
          
          <div className="relative w-full max-w-[390px] max-h-[90vh] bg-white rounded-[24px] flex flex-col shadow-2xl animate-in zoom-in-95 fade-in duration-200 ease-out">
            
            {/* Header - Fixed */}
            <div className="px-[20px] pt-[20px] pb-[16px] flex justify-between items-center shrink-0 border-b border-transparent">
              <div className="w-[28px]"></div> {/* Spacer for perfect centering */}
              <h2 className="text-[17px] font-bold text-[#1c1c1e]">添加交易所账户</h2>
              <button onClick={() => setIsAddExchangeModalOpen(false)} className="w-[28px] h-[28px] flex items-center justify-center rounded-full active:bg-[#f0f0f0] transition-colors">
                <X className="w-[20px] h-[20px] text-[#5c5c5e]" strokeWidth={2} />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="px-[20px] overflow-y-auto hide-scrollbar flex-1 pb-[10px]">
              
              {/* Section 1: 选择交易所 */}
              <div className="mb-[24px]">
                <h3 className="text-[13px] font-bold text-[#5c5c5e] mb-[10px]">选择交易所</h3>
                <div className="grid grid-cols-3 gap-[8px]">
                   {[
                     { id: 'OKX', icon: <OkxIcon size={20} innerSize={13}/>, name: 'OKX' },
                     { id: 'Binance', icon: <BinanceLogo size={20}/>, name: '币安 Binance' },
                     { id: 'Bybit', icon: <BybitIcon size={20}/>, name: 'Bybit' },
                     { id: 'Bitget', icon: <BitgetIcon />, name: 'Bitget' },
                     { id: 'Gateio', icon: <GateIoIcon />, name: 'Gate.io' },
                     { id: 'KuCoin', icon: <KuCoinIcon />, name: 'KuCoin' },
                     { id: 'MEXC', icon: <MexcIcon />, name: 'MEXC' },
                     { id: 'HTX', icon: <HuobiIcon />, name: 'HTX 火币' },
                     { id: 'Other', icon: <div className="w-[20px] h-[20px] bg-[#e5e5ea] rounded-full flex items-center justify-center shrink-0"><MoreHorizontal className="w-[12px] h-[12px] text-[#8e8e93]" strokeWidth={3}/></div>, name: '其他交易所' },
                   ].map(ex => {
                     const isSelected = exchangeSelected === ex.id;
                     return (
                       <div 
                         key={ex.id}
                         onClick={() => setExchangeSelected(ex.id)}
                         className={`relative rounded-[10px] py-[10px] px-[8px] flex flex-row items-center space-x-[6px] cursor-pointer transition-colors border ${isSelected ? 'border-[#1677ff] bg-[#f0f6ff]' : 'border-[#f0f0f0] active:bg-[#f9f9f9]'}`}
                       >
                         {ex.icon}
                         <span className={`text-[12px] whitespace-nowrap overflow-hidden text-ellipsis ${isSelected ? 'font-bold text-[#1c1c1e]' : 'font-medium text-[#5c5c5e]'}`}>{ex.name}</span>
                         {isSelected && (
                           <div className="absolute -top-[1.5px] -right-[1.5px] w-[18px] h-[18px] bg-[#1677ff] rounded-bl-[8px] rounded-tr-[8px] flex items-center justify-center shadow-sm">
                             <Check className="w-[12px] h-[12px] text-white" strokeWidth={3.5} />
                           </div>
                         )}
                       </div>
                     )
                   })}
                </div>
              </div>

              {/* Section 2: 账户信息 */}
              <div className="mb-[24px]">
                <h3 className="text-[13px] font-bold text-[#5c5c5e] mb-[10px]">账户信息</h3>
                
                <div className="mb-[14px]">
                  <label className="text-[12px] text-[#8e8e93] block mb-[6px] ml-[2px]">账户名称</label>
                  <input 
                    type="text" 
                    placeholder="例如：OKX 现货账户"
                    className="w-full border border-[#f0f0f0] rounded-[12px] px-[14px] py-[12px] text-[15px] font-medium text-[#1c1c1e] outline-none placeholder:text-[#c7c7cc] focus:border-[#1677ff] focus:ring-1 focus:ring-[#1677ff]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-[12px] text-[#8e8e93] block mb-[6px] ml-[2px]">账户类型</label>
                  <div className="w-full border border-[#f0f0f0] rounded-[12px] px-[14px] py-[12px] flex justify-between items-center bg-white cursor-pointer active:bg-[#f9f9f9] transition-colors">
                    <span className="text-[15px] font-medium text-[#1c1c1e]">现货账户</span>
                    <ChevronDown className="w-[16px] h-[16px] text-[#c7c7cc]" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Section 3: API 连接 */}
              <div className="mb-[24px] flex items-center justify-between border-b border-[#f4f5f8] pb-[20px]">
                <div className="flex flex-col pr-[16px]">
                  <h3 className="text-[13px] font-bold text-[#5c5c5e] mb-[4px]">API 连接 <span className="text-[#8e8e93] font-normal">(可选)</span></h3>
                  <span className="text-[11px] text-[#8e8e93]">连接 API 后可自动同步余额与交易记录</span>
                </div>
                <ToggleSwitch checked={apiConnected} onChange={() => setApiConnected(!apiConnected)} />
              </div>

              {/* Section 4: 选择货币 */}
              <div className="mb-[24px]">
                <h3 className="text-[13px] font-bold text-[#5c5c5e] mb-[10px]">选择货币</h3>
                <div>
                  <label className="text-[12px] text-[#8e8e93] block mb-[6px] ml-[2px]">计价货币</label>
                  <div className="w-full border border-[#f0f0f0] rounded-[12px] px-[14px] py-[12px] flex justify-between items-center bg-white cursor-pointer active:bg-[#f9f9f9] transition-colors">
                    <span className="text-[15px] font-medium text-[#1c1c1e]">AED - 阿联酋迪拉姆</span>
                    <ChevronDown className="w-[16px] h-[16px] text-[#c7c7cc]" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Section 5: APR 配置 */}
              <div className="mb-[8px]">
                <div className="flex items-center justify-between mb-[16px]">
                  <div className="flex flex-col">
                    <h3 className="text-[13px] font-bold text-[#5c5c5e] mb-[4px]">APR 配置 <span className="text-[#8e8e93] font-normal">(可选)</span></h3>
                    <span className="text-[11px] text-[#8e8e93]">配置后将用于收益计算与统计</span>
                  </div>
                  <ToggleSwitch checked={aprConfigEnabled} onChange={() => setAprConfigEnabled(!aprConfigEnabled)} />
                </div>

                {/* Conditional Inputs based on APR Toggle */}
                <div className={`space-y-[14px] overflow-hidden transition-all duration-300 ${aprConfigEnabled ? 'opacity-100 max-h-[400px]' : 'opacity-0 max-h-0'}`}>
                  
                  <div>
                    <div className="flex items-center space-x-[4px] mb-[6px] ml-[2px]">
                      <label className="text-[12px] font-medium text-[#5c5c5e]">高息限额</label>
                      <Info className="w-[12px] h-[12px] text-[#c7c7cc]" strokeWidth={2} />
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="请输入高息限额金额"
                        className="w-full border border-[#f0f0f0] rounded-[12px] pl-[14px] pr-[40px] py-[12px] text-[15px] font-medium text-[#1c1c1e] outline-none placeholder:text-[#c7c7cc] focus:border-[#1677ff] focus:ring-1 focus:ring-[#1677ff]/20 transition-all"
                      />
                      <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[13px] font-medium text-[#8e8e93]">AED</span>
                    </div>
                    <span className="text-[11px] text-[#8e8e93] block mt-[6px] ml-[2px]">超过该金额后按超出利率计算</span>
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-[#5c5c5e] block mb-[6px] ml-[2px]">基础利率 (APR)</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="请输入基础利率"
                        className="w-full border border-[#f0f0f0] rounded-[12px] pl-[14px] pr-[30px] py-[12px] text-[15px] font-medium text-[#1c1c1e] outline-none placeholder:text-[#c7c7cc] focus:border-[#1677ff] focus:ring-1 focus:ring-[#1677ff]/20 transition-all"
                      />
                      <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[14px] font-bold text-[#8e8e93]">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-[#5c5c5e] block mb-[6px] ml-[2px]">超出利率 (APR)</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="请输入超出利率"
                        className="w-full border border-[#f0f0f0] rounded-[12px] pl-[14px] pr-[30px] py-[12px] text-[15px] font-medium text-[#1c1c1e] outline-none placeholder:text-[#c7c7cc] focus:border-[#1677ff] focus:ring-1 focus:ring-[#1677ff]/20 transition-all"
                      />
                      <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[14px] font-bold text-[#8e8e93]">%</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Footer Button - Fixed */}
            <div className="px-[20px] pb-[20px] pt-[12px] bg-white rounded-b-[24px] shrink-0 border-t border-[#f4f5f8]">
              <button 
                onClick={() => setIsAddExchangeModalOpen(false)}
                className="w-full py-[14px] rounded-[14px] text-[16px] font-bold text-white bg-[#1677ff] active:bg-[#0f60d6] transition-colors shadow-[0_4px_12px_rgba(22,119,255,0.25)]"
              >
                添加账户
              </button>
            </div>

          </div>
        </div>
      )}


      {/* ======================================================= */}
      {/* 3. ACCOUNT DETAIL MODAL (Bottom Sheet) */}
      {/* ======================================================= */}
      {isAccountDetailModalOpen && selectedAccount && (
        <div className="fixed inset-0 z-[100] flex justify-center items-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity" onClick={() => setIsAccountDetailModalOpen(false)}></div>
          
          <div className="relative bg-white w-full max-w-[430px] rounded-t-[24px] pb-[32px] pt-[8px] px-[20px] shadow-2xl animate-in slide-in-from-bottom-8 duration-300 ease-out">
            <div className="w-full flex justify-center mb-[16px]">
              <div className="w-[32px] h-[4px] bg-[#e5e5ea] rounded-full"></div>
            </div>

            <div className="flex items-start justify-between mb-[24px]">
               <div className="flex items-center space-x-[14px]">
                  <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#f4f5f8] rounded-full overflow-hidden shrink-0">
                    {selectedAccount.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                     <h2 className="text-[18px] font-bold text-[#1c1c1e] leading-tight mb-[4px]">{selectedAccount.name}</h2>
                     <span className="text-[13px] text-[#8e8e93] font-medium">{selectedAccount.sub}</span>
                  </div>
               </div>
               <button onClick={() => setIsAccountDetailModalOpen(false)} className="w-[30px] h-[30px] bg-[#f4f5f8] rounded-full flex items-center justify-center hover:bg-[#e5e5ea] transition-colors shrink-0">
                 <X className="w-[16px] h-[16px] text-[#5c5c5e]" strokeWidth={2.5} />
               </button>
            </div>

            <div className="mb-[24px]">
               <h3 className="text-[15px] font-bold text-[#1c1c1e] mb-[12px]">1. 币种</h3>
               <div className="flex overflow-x-auto hide-scrollbar space-x-[12px] pb-[4px]">
                  {currenciesList.map((currency) => {
                    const isSelected = selectedCurrency === currency.id;
                    return (
                      <div 
                        key={currency.id}
                        onClick={() => setSelectedCurrency(currency.id)}
                        className={`relative rounded-[10px] px-[16px] py-[10px] flex items-center space-x-[8px] cursor-pointer shrink-0 transition-colors ${isSelected ? 'border-2 border-[#1677ff] bg-[#f0f6ff]' : 'border border-[#e5e5ea] hover:bg-[#f9f9f9]'}`}
                      >
                         {currency.icon}
                         <span className={`text-[15px] ${isSelected ? 'font-bold text-[#1c1c1e]' : 'font-medium text-[#5c5c5e]'}`}>{currency.label}</span>
                         {isSelected && (
                           <div className="absolute -top-[1.5px] -right-[1.5px] w-[22px] h-[22px] bg-[#1677ff] rounded-bl-[10px] rounded-tr-[8px] flex items-center justify-center shadow-sm">
                              <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
                           </div>
                         )}
                      </div>
                    );
                  })}
               </div>
            </div>

            <div className="mb-[24px]">
               <h3 className="text-[15px] font-bold text-[#1c1c1e] mb-[12px]">2. 余额</h3>
               <div className="border border-[#e5e5ea] rounded-[14px] p-[12px] flex flex-col relative focus-within:border-[#1677ff] focus-within:ring-1 focus-within:ring-[#1677ff]/20 transition-all">
                  <span className="text-[12px] text-[#8e8e93] mb-[2px]">余额 ({selectedCurrency})</span>
                  <div className="flex items-center justify-between">
                     <input type="text" value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className="text-[22px] font-bold text-[#1c1c1e] w-full outline-none bg-transparent"/>
                     {accountBalance && <button onClick={() => setAccountBalance('')} className="p-[4px]"><ClearInputIcon /></button>}
                  </div>
               </div>
               <p className="text-[12px] text-[#8e8e93] mt-[8px] ml-[2px]">当前可用余额，请输入数字，最多 8 位小数</p>

               <div className="flex items-center justify-between mt-[16px]">
                  <span className="text-[14px] font-medium text-[#1c1c1e]">仅调整余额，不计入收支</span>
                  <ToggleSwitch checked={isAdjustOnly} onChange={() => setIsAdjustOnly(!isAdjustOnly)} />
               </div>
            </div>

            <div className="mb-[32px]">
               <div className="flex items-center space-x-[6px] mb-[12px]">
                 <h3 className="text-[15px] font-bold text-[#1c1c1e]">3. APY 配置</h3>
                 <Info className="w-[14px] h-[14px] text-[#c7c7cc]" strokeWidth={2} />
               </div>
               <div className="grid grid-cols-3 gap-[8px]">
                  <div className="border border-[#f0f0f0] rounded-[12px] p-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                     <div className="text-[12px] font-medium text-[#5c5c5e] mb-[6px]">高息限额</div>
                     <div className="flex items-baseline justify-between mb-[8px]">
                        <span className="text-[17px] font-bold text-[#1c1c1e] truncate pr-1">10,000</span>
                        <span className="text-[11px] font-medium text-[#8e8e93] shrink-0">{selectedCurrency}</span>
                     </div>
                     <div className="text-[10px] text-[#8e8e93] leading-tight transform scale-95 origin-left">享受高息的上限额度</div>
                  </div>
                  <div className="border border-[#f0f0f0] rounded-[12px] p-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                     <div className="text-[12px] font-medium text-[#5c5c5e] mb-[6px]">基础利率</div>
                     <div className="flex items-baseline justify-between mb-[8px]">
                        <span className="text-[17px] font-bold text-[#1c1c1e]">4.50</span>
                        <span className="text-[12px] font-medium text-[#8e8e93]">%</span>
                     </div>
                     <div className="text-[10px] text-[#8e8e93] leading-tight transform scale-95 origin-left">限额内的年化利率</div>
                  </div>
                  <div className="border border-[#f0f0f0] rounded-[12px] p-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                     <div className="text-[12px] font-medium text-[#5c5c5e] mb-[6px]">超出利率</div>
                     <div className="flex items-baseline justify-between mb-[8px]">
                        <span className="text-[17px] font-bold text-[#1c1c1e]">1.20</span>
                        <span className="text-[12px] font-medium text-[#8e8e93]">%</span>
                     </div>
                     <div className="text-[10px] text-[#8e8e93] leading-tight transform scale-95 origin-left">超出部分的年化利率</div>
                  </div>
               </div>
            </div>

            <div className="flex space-x-[12px] pb-[8px]">
               <button onClick={() => setIsAccountDetailModalOpen(false)} className="w-[120px] py-[14px] border border-[#e5e5ea] rounded-[14px] text-[16px] font-bold text-[#5c5c5e] bg-white active:bg-gray-50 transition-colors">取消</button>
               <button onClick={() => setIsAccountDetailModalOpen(false)} className="flex-1 py-[14px] rounded-[14px] text-[16px] font-bold text-white bg-[#1677ff] active:bg-[#0f60d6] transition-colors shadow-[0_4px_12px_rgba(22,119,255,0.25)]">保存修改</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
