/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import React, { useEffect, useState } from 'react';
import { BillsScreen } from '@/components/wallet/screens/bills-screen';
import { AssetsScreen } from '@/components/wallet/screens/assets-screen';
import {
  Search, Bell, Calendar, ChevronDown, Eye, ArrowUpRight, ChevronRight,
  Home, FileText, PieChart, Wallet, PenLine, BarChart2, PieChart as PieChartIcon,
  ArrowRightLeft, AlertTriangle, Landmark,
} from 'lucide-react';

// ==========================================
// 0. SUPABASE REST API CONFIGURATION
// ==========================================
const SUPABASE_URL = "https://jnspnymlvcxalsnzdulb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmUiLCJyZWYiOiJqbnNwbnltbHZjeGFsc256ZHVsYiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc2OTAyODQ3LCJleHAiOjIwOTI0Nzg4NDd9.jDvIeI5tBBbuysDkuFOQgM3eOXAQ8mgeL82C1NxVViA";

const fetchSupabase = async (endpoint, method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    }
  };
  if (body) options.body = JSON.stringify(body);
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

const SEED_ACCOUNTS = [
  { name: "Mashreq Bank", sub: "储蓄账户 · 5821", type: "bank", balance: "39,256.54", currency: "AED", icon: "mashreq" },
  { name: "中国建设银行", sub: "借记卡 · 8899", type: "bank", balance: "19,230.27", currency: "CNY", icon: "ccb" },
  { name: "支付宝", sub: "余额及余额宝", type: "wallet", balance: "12,450.80", currency: "CNY", icon: "alipay" },
  { name: "微信", sub: "零钱", type: "wallet", balance: "8,313.51", currency: "CNY", icon: "wechat" },
  { name: "OKX 交易所账户", sub: "现货账户 · ADCB **** 1234", type: "exchange", balance: "12,845.68", currency: "USDT", icon: "okx" },
  { name: "币安 交易所账户", sub: "资金账户", type: "exchange", balance: "11,237.41", currency: "USDT", icon: "binance" },
  { name: "Bitget 交易所账户", sub: "现货账户", type: "exchange", balance: "9,113.11", currency: "USDT", icon: "bitget" },
  { name: "火币 交易所账户", sub: "现货账户", type: "exchange", balance: "8,500.00", currency: "USDT", icon: "huobi" },
  { name: "现金 (AED)", sub: "钱包现金", type: "cash", balance: "8,129.00", currency: "AED", icon: "cash" }
];

const SEED_TRANSACTIONS = [
  { dateLabel: '今天 4月23日', iconBg: 'bg-black', iconType: 'apple', title: 'Apple Pay 自动记账', subtitle: 'ADCB **** 1234', tag: '购物', tagType: 'shopping', amount: '-89.90', isIncome: false, time: '18:45', fullDate: '2026年4月23日 18:45', currency: 'AED', paymentMethod: 'Apple Pay', note: '给家人买礼物' },
  { dateLabel: '今天 4月23日', iconBg: 'bg-[#10a37f]', iconType: 'openai', title: 'Ai', subtitle: 'ADCB **** 1234', tag: '订阅', tagType: 'subscription', amount: '-19.99', isIncome: false, time: '16:32', fullDate: '2026年4月23日 16:32', currency: 'AED', paymentMethod: 'ADCB', note: '' },
  { dateLabel: '今天 4月23日', iconBg: 'bg-[#26A17B]', iconType: 'usdt', title: 'OKX 理财收益', subtitle: 'OKX 资金账户', tag: '理财', tagType: 'investment', amount: '+1,200.00', isIncome: true, time: '09:15', fullDate: '2026年4月23日 09:15', currency: 'USDT', paymentMethod: 'OKX', note: '' },
  { dateLabel: '今天 4月23日', iconBg: 'bg-[#5c8af0]', iconType: 'landmark', title: '转账给张三', subtitle: 'ADCB **** 1234', tag: '转账', tagType: 'transfer', amount: '-500.00', isIncome: false, time: '08:20', fullDate: '2026年4月23日 08:20', currency: 'AED', paymentMethod: 'ADCB', note: '' },
  { dateLabel: '昨天 4月22日', iconBg: 'bg-[#1677ff]', iconType: 'alipay', title: '支付宝 转账', subtitle: '支付宝账户', tag: '转账', tagType: 'transfer', amount: '+2,500.00', isIncome: true, time: '21:35', fullDate: '2026年4月22日 21:35', currency: 'AED', paymentMethod: '支付宝', note: '' },
  { dateLabel: '昨天 4月22日', iconBg: 'bg-black', iconType: 'bitget', title: 'Bitget 理财收益', subtitle: 'Bitget 资金账户', tag: '理财', tagType: 'investment', amount: '+4,000.00', isIncome: true, time: '14:10', fullDate: '2026年4月22日 14:10', currency: 'USDT', paymentMethod: 'Bitget', note: '' },
  { dateLabel: '昨天 4月22日', iconBg: 'bg-[#fee000]', iconType: 'noon', title: 'Noon', subtitle: 'Mashreq **** 5678', tag: '购物', tagType: 'shopping', amount: '-245.60', isIncome: false, time: '11:05', fullDate: '2026年4月22日 11:05', currency: 'AED', paymentMethod: 'Mashreq Bank', note: '' },
  { dateLabel: '昨天 4月22日', iconBg: 'bg-[#e6f4ff]', iconType: 'cash', title: '线下超市购物', subtitle: '现金支付', tag: '购物', tagType: 'shopping', amount: '-1,000.00', isIncome: false, time: '09:00', fullDate: '2026年4月22日 09:00', currency: 'AED', paymentMethod: '现金', note: '' },
  { dateLabel: '4月21日 星期一', iconBg: 'bg-[#232f3e]', iconType: 'amazon', title: 'Amazon.ae', subtitle: 'ADCB **** 1234', tag: '购物', tagType: 'shopping', amount: '-112.36', isIncome: false, time: '20:22', fullDate: '2026年4月21日 20:22', currency: 'AED', paymentMethod: 'ADCB', note: '' },
  { dateLabel: '4月21日 星期一', iconBg: 'bg-white border border-gray-200', iconType: 'mastercard', title: 'Careem', subtitle: 'Mashreq **** 5678', tag: '交通', tagType: 'transport', amount: '-35.00', isIncome: false, time: '18:08', fullDate: '2026年4月21日 18:08', currency: 'AED', paymentMethod: 'Mashreq Bank', note: '' },
  { dateLabel: '4月21日 星期一', iconBg: 'bg-[#26A17B]', iconType: 'usdt', title: 'OKX 理财收益', subtitle: 'OKX 资金账户', tag: '理财', tagType: 'investment', amount: '+2,300.00', isIncome: true, time: '10:30', fullDate: '2026年4月21日 10:30', currency: 'USDT', paymentMethod: 'OKX', note: '' }
];

function useSupabaseData() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);
        let accs = [];
        let txs = [];
        try { accs = await fetchSupabase("accounts?select=*"); } catch { console.warn("Accounts table missing or fetch failed"); }
        try { txs = await fetchSupabase("transactions?select=*"); } catch { console.warn("Transactions table missing or fetch failed"); }

        if (accs.length === 0) {
          console.log("Seeding accounts to Supabase...");
          try { accs = await fetchSupabase("accounts", "POST", SEED_ACCOUNTS); }
          catch { accs = SEED_ACCOUNTS; }
        }
        if (txs.length === 0) {
          console.log("Seeding transactions to Supabase...");
          try { txs = await fetchSupabase("transactions", "POST", SEED_TRANSACTIONS); }
          catch { txs = SEED_TRANSACTIONS; }
        }

        setTransactions(txs);
      } catch (e) {
        console.error("Initialization Error:", e);
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, []);

  return { transactions, loading };
}

const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px]">
    <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#1677FF"/>
    <path d="M12.5 10H17.5C19.433 10 21 11.567 21 13.5C21 14.88 20.2 16.07 19.048 16.653C20.553 17.152 21.5 18.6 21.5 20.5C21.5 22.433 19.933 24 18 24H12.5V10Z" fill="white"/>
    <path d="M15 12.5V15.5H17.5C18.328 15.5 19 14.828 19 14C19 13.172 18.328 12.5 17.5 12.5H15Z" fill="#1677FF"/>
    <path d="M15 18V21.5H18C18.966 21.5 19.75 20.716 19.75 19.75C19.75 18.784 18.966 18 18 18H15Z" fill="#1677FF"/>
  </svg>
);

const AppleIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white"><path d="M12 2C12 2 12 3.5 13.5 4.5C15 5.5 16.5 5 16.5 5C16.5 5 15.5 8 12.5 8C9.5 8 8.5 6 8.5 6C8.5 6 6.5 6.5 5.5 9C4.5 11.5 5 16.5 7 19.5C9 22.5 11.5 22.5 12.5 21.5C13.5 20.5 14.5 20.5 16.5 21.5C18.5 22.5 20.5 19.5 21.5 16.5C21.5 16.5 19 16 18 13.5C17 11 18.5 9 18.5 9C18.5 9 16.5 7 13.5 7.5C12.5 7.5 12 2 12 2Z" /></svg>);
const OpenAiIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] text-white"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9847 5.9847 0 0 0 3.989-2.9 6.051 6.051 0 0 0-.7388-7.0732ZM13.2599 22.4278a4.4842 4.4842 0 0 1-2.9022-1.0664l.0567-.0333 4.8872-2.8223a.7925.7925 0 0 0 .3962-.684v-6.0416l2.1274 1.2284v5.334a4.526 4.526 0 0 1-4.5653 4.0852ZM5.2891 19.34a4.4842 4.4842 0 0 1-.6283-3.0315l.0614.0284 4.8919 2.8223a.7925.7925 0 0 0 .7925 0l5.2319-3.0208v2.4568L10.364 21.645A4.5308 4.5308 0 0 1 5.2891 19.34ZM2.8687 11.2359a4.4842 4.4842 0 0 1 2.274-2.1002v6.1031a.7925.7925 0 0 0 .3962.6888l5.2319 3.0208-2.1274 1.2284-5.2698-3.0397a4.5308 4.5308 0 0 1-.5049-5.8912h.0048ZM18.711 11.2359a4.4842 4.4842 0 0 1-2.274 2.1002V7.233a.7925.7925 0 0 0-.3962-.6888L10.8089 3.5234l2.1274-1.2284 5.2698 3.0397a4.5308 4.5308 0 0 1 .5049 5.8912h-.0048ZM10.7402 1.5722a4.4842 4.4842 0 0 1 2.9022 1.0664l-.0567.0333-4.8872 2.8223a.7925.7925 0 0 0-.3962.684v6.0416L6.1749 10.991V5.6571A4.526 4.526 0 0 1 10.7402 1.5722ZM18.711 4.66a4.4842 4.4842 0 0 1 .6283 3.0315l-.0614-.0284-4.8919-2.8223a.7925.7925 0 0 0-.7925 0l-5.2319 3.0208V5.4048l5.2746-3.054A4.5308 4.5308 0 0 1 18.711 4.66ZM14.9213 11.4582l-2.9211 1.6868-2.9211-1.6868v-3.3783l2.9211-1.6868 2.9211 1.6868v3.3783Z" /></svg>);
const UsdtIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#26A17B"/><path d="M13.435 10.822v2.855c1.64.088 2.923.447 3.527.915.688.535 1.066 1.258 1.066 2.04 0 .783-.378 1.505-1.066 2.04-.604.468-1.887.827-3.527.915v2.855h-2.87v-2.855c-1.64-.088-2.923-.447-3.527-.915-.688-.535-1.066-1.258-1.066-2.04 0-.783.378-1.505 1.066-2.04.604-.468 1.887-.827 3.527-.915v-2.855h2.87zm-1.435 4.39c2.518 0 4.56-1.12 4.56-2.5s-2.042-2.5-4.56-2.5-4.56 1.12-4.56 2.5 2.042 2.5 4.56 2.5z" fill="white"/></svg>);
const OkxIcon = ({ size = 20, innerSize = 13 }) => (<div className="bg-black rounded-full flex items-center justify-center shrink-0" style={{width: size, height: size}}><svg viewBox="0 0 24 24" fill="currentColor" className="text-white" style={{width: innerSize, height: innerSize}}><path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" /></svg></div>);
const BitgetIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#00e5c0] shrink-0"><path d="M12 2L22 12L12 22L2 12L12 2Z" /><circle cx="12" cy="12" r="4" fill="black" /></svg>);
const HuobiIcon = () => (<div className="w-[18px] h-[18px] bg-[#1853db] rounded-full flex items-center justify-center shrink-0"><svg viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px] text-white"><path d="M12 2C12 2 8 8 8 12C8 16 11.5 19 12 19C12.5 19 16 16 16 12C16 8 12 2 12 2ZM12 16C11 16 10.5 15 10.5 14C10.5 13 12 10 12 10C12 10 13.5 13 13.5 14C13.5 15 13 16 12 16Z" /></svg></div>);
const BinanceLogo = ({ size = 20 }) => (<div className="bg-[#fcd535] rounded-[6px] flex items-center justify-center shrink-0" style={{ width: size, height: size }}><svg viewBox="0 0 24 24" fill="#1e2329" style={{ width: size * 0.6, height: size * 0.6 }}><path d="M12 2l-5 5 2 2 3-3 3 3 2-2-5-5zm0 20l5-5-2-2-3 3-3-3-2 2 5 5zm-7-7l-3-3 3-3 2 2-3 3 3 3-2 2zm14 0l3-3-3-3-2 2 3 3-3 3 2 2zM12 9l-3 3 3 3 3-3-3-3z"/></svg></div>);

const AmazonIcon = () => (<div className="text-white font-bold text-[14px] leading-none" style={{ fontFamily: 'Georgia, serif' }}>a</div>);
const MastercardIcon = () => (<div className="flex -space-x-[6px]"><div className="w-[11px] h-[11px] rounded-full bg-[#ff3b30] opacity-90 mix-blend-multiply"></div><div className="w-[11px] h-[11px] rounded-full bg-[#ffcc00] opacity-90 mix-blend-multiply"></div></div>);
const MashreqLogoIcon = () => (<svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0"><path d="M12 2C17.52 2 22 6.48 22 12c0 1.66-.41 3.22-1.14 4.6l-5.6-3.23c.47-.85.74-1.84.74-2.87 0-3.31-2.69-6-6-6-1.03 0-2.02.27-2.87.74L3.9 1.64C5.28.91 6.84.5 8.5.5h3.5z" fill="#f37021"/><path d="M2.5 8.5c-.91 1.38-1.5 2.94-1.5 4.6 0 5.52 4.48 10 10 10 1.66 0 3.22-.59 4.6-1.5l-3.23-5.6c-.85.47-1.84.74-2.87.74-3.31 0-6-2.69-6-6 0-1.03.27-2.02.74-2.87L1.01 8.5z" fill="#ffb612"/></svg>);
const CCBLogo = () => (<svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" fill="none"><circle cx="12" cy="12" r="11" fill="#003B90" /><circle cx="12" cy="12" r="8" fill="white" /><circle cx="12" cy="12" r="5" fill="#003B90" /><path d="M 12 7 L 17 12 L 12 17 L 7 12 Z" fill="white" /></svg>);
const AlipayLogo = () => (<div className="w-[18px] h-[18px] bg-[#1677ff] rounded-full text-white font-bold text-[11px] flex items-center justify-center leading-none shrink-0" style={{ fontFamily: 'sans-serif' }}>支</div>);
const WeChatLogo = () => (<div className="w-[20px] h-[20px] bg-[#07c160] rounded-full flex items-center justify-center relative shrink-0"><div className="w-[10px] h-[8px] bg-white rounded-full absolute top-[5px] left-[3px] shadow-sm"></div><div className="w-[7px] h-[5px] bg-white rounded-full absolute bottom-[4px] right-[3px] shadow-sm"></div></div>);
const CashIcon = () => (<div className="w-[18px] h-[18px] bg-[#e6f4ff] border border-[#52c41a] rounded-[4px] flex items-center justify-center shrink-0"><div className="w-[9px] h-[5px] border border-[#52c41a] rounded-[2px] flex items-center justify-center"><div className="w-[3px] h-[1.5px] bg-[#52c41a] rounded-full"></div></div></div>);

const getIconByString = (type, size = 'small') => {
  switch(type) {
    case 'apple': return <AppleIcon />;
    case 'openai': return <OpenAiIcon />;
    case 'usdt': return <UsdtIcon />;
    case 'landmark': return <Landmark className={size === 'large' ? "w-[24px] h-[24px] text-white" : "w-[16px] h-[16px] text-white"} strokeWidth={2.5} />;
    case 'alipay': return <AlipayLogo />;
    case 'bitget': return size === 'large' ? <div className="transform scale-[2.4]"><BitgetIcon /></div> : <BitgetIcon />;
    case 'noon': return <div className="w-[16px] h-[16px] bg-black text-[#fee000] rounded-[4px] flex items-center justify-center font-bold text-[11px]">n</div>;
    case 'cash': return size === 'large' ? <div className="transform scale-[2.4]"><CashIcon /></div> : <CashIcon />;
    case 'amazon': return <AmazonIcon />;
    case 'mastercard': return <MastercardIcon />;
    case 'mashreq': return <MashreqLogoIcon />;
    case 'ccb': return <CCBLogo />;
    case 'wechat': return <WeChatLogo />;
    case 'okx': return size === 'large' ? <OkxIcon size={48} innerSize={30} /> : <OkxIcon size={20} innerSize={13} />;
    case 'binance': return size === 'large' ? <BinanceLogo size={48} /> : <BinanceLogo size={20} />;
    case 'huobi': return size === 'large' ? <div className="transform scale-[2.4]"><HuobiIcon /></div> : <HuobiIcon />;
    default: return <Landmark className="w-[16px] h-[16px] text-gray-500" />;
  }
};


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


const GlobalTabBar = ({ activeTab, setActiveTab }) => (
  <div className="absolute bottom-0 left-0 right-0 bg-[#fdfdfd] border-t border-[#f0f0f0] flex justify-between items-center px-[40px] pt-[8px] pb-[max(16px,env(safe-area-inset-bottom))] z-[200]">
    <button onClick={() => setActiveTab('home')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
      <Home className={`w-[22px] h-[22px] ${activeTab === 'home' ? 'text-[#1677ff] fill-[#1677ff]' : 'text-[#8e8e93]'}`} strokeWidth={1.5} />
      <span className={`text-[10px] mt-[4px] ${activeTab === 'home' ? 'font-semibold text-[#1677ff]' : 'font-medium text-[#8e8e93]'}`}>首页</span>
    </button>
    <button onClick={() => setActiveTab('bills')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
      <FileText className={`w-[22px] h-[22px] ${activeTab === 'bills' ? 'text-[#1677ff] fill-[#1677ff]' : 'text-[#8e8e93]'}`} strokeWidth={1.5} />
      <span className={`text-[10px] mt-[4px] ${activeTab === 'bills' ? 'font-semibold text-[#1677ff]' : 'font-medium text-[#8e8e93]'}`}>账单</span>
    </button>
    <button onClick={() => setActiveTab('stats')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
      <div className="relative">
        <PieChart className={`w-[22px] h-[22px] ${activeTab === 'stats' ? 'text-[#1677ff] fill-[#1677ff]' : 'text-[#8e8e93]'}`} strokeWidth={1.5} />
        {activeTab === 'stats' && (
          <div className="absolute -top-[2px] -right-[2px] w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[10px] h-[10px] text-[#1677ff]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
        )}
      </div>
      <span className={`text-[10px] mt-[4px] ${activeTab === 'stats' ? 'font-semibold text-[#1677ff]' : 'font-medium text-[#8e8e93]'}`}>统计</span>
    </button>
    <button onClick={() => setActiveTab('assets')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
      <Wallet className={`w-[22px] h-[22px] ${activeTab === 'assets' ? 'text-[#1677ff] fill-[#1677ff]' : 'text-[#8e8e93]'}`} strokeWidth={1.5} />
      <span className={`text-[10px] mt-[4px] ${activeTab === 'assets' ? 'font-semibold text-[#1677ff]' : 'font-medium text-[#8e8e93]'}`}>资产</span>
    </button>
  </div>
);

const MessageCenterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[600] flex justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-[430px] h-full pointer-events-none">
          <div className="absolute top-[86px] right-[16px] w-[320px] bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-[16px] pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="absolute -top-[6px] right-[58px] w-[14px] h-[14px] bg-white transform rotate-45 border-t border-l border-[#f0f0f0] rounded-sm"></div>
              <div className="flex items-center text-[#5c5c5e] mb-[12px] px-[4px]">
                 <Bell className="w-[16px] h-[16px] mr-[6px]" strokeWidth={2} />
                 <span className="text-[14px] font-medium">消息中心</span>
              </div>
              <div className="space-y-[8px]">
                  <div className="flex items-start bg-white border border-[#f4f5f8] rounded-[16px] p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative cursor-pointer active:bg-gray-50 transition-colors">
                     <div className="w-[36px] h-[36px] rounded-full bg-[#fff7ed] flex items-center justify-center shrink-0 mr-[12px]"><Calendar className="text-[#f59e0b] w-[18px] h-[18px]" strokeWidth={2.5} /></div>
                     <div className="flex-1 pr-[16px]">
                        <div className="text-[13px] font-bold text-[#1c1c1e]">待处理事项</div>
                        <div className="text-[14px] text-[#f59e0b] font-medium mt-[2px] mb-[2px]">3天后 · 信用卡还款日</div>
                        <div className="text-[11px] text-[#8e8e93]">建议提前处理，避免逾期</div>
                     </div>
                     <div className="w-[6px] h-[6px] rounded-full bg-[#f59e0b] absolute top-[26px] right-[14px]"></div>
                  </div>
                  <div className="flex items-start bg-white border border-[#f4f5f8] rounded-[16px] p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative cursor-pointer active:bg-gray-50 transition-colors">
                     <div className="w-[36px] h-[36px] rounded-full bg-[#fef2f2] flex items-center justify-center shrink-0 mr-[12px]"><AlertTriangle className="text-[#ff3b30] w-[18px] h-[18px]" strokeWidth={2.5} /></div>
                     <div className="flex-1 pr-[16px]">
                        <div className="text-[13px] font-bold text-[#1c1c1e]">预算预警通知</div>
                        <div className="text-[14px] text-[#ff3b30] font-medium mt-[2px] mb-[2px]">本月餐饮预算已使用 80%</div>
                        <div className="text-[11px] text-[#8e8e93]">建议控制本周支出</div>
                     </div>
                     <div className="w-[6px] h-[6px] rounded-full bg-[#ff3b30] absolute top-[26px] right-[14px]"></div>
                  </div>
              </div>
              <div className="mt-[16px] flex items-center justify-center pb-[4px]">
                  <button className="flex items-center text-[13px] font-medium text-[#1677ff] active:opacity-60 transition-opacity">查看全部通知 <ChevronRight className="w-[14px] h-[14px] ml-[2px]" strokeWidth={2.5}/></button>
              </div>
          </div>
      </div>
    </div>
  );
};

const HomePage = ({ setIsMessageCenterOpen, transactions }) => {
  return (
    <div className="bg-[#f4f5f8] font-sans text-gray-900 pb-[100px] relative overflow-x-hidden animate-in fade-in duration-300">
      <div className="px-[16px] pt-[env(safe-area-inset-top,52px)] pb-[10px] flex items-center justify-between sticky top-0 z-[15] bg-[#f4f5f8]/95 backdrop-blur-sm">
        <div className="flex items-center space-x-[6px]">
          <LogoIcon />
          <span className="text-[20px] font-bold text-[#1c1c1e] italic tracking-tight" style={{fontFamily: 'Helvetica Neue, Arial, sans-serif'}}>BitLedger <span className="text-[#1677ff]">Pro</span></span>
        </div>
        <div className="flex items-center space-x-[16px]">
          <button className="active:opacity-60 transition-opacity"><Search className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} /></button>
          <button onClick={() => setIsMessageCenterOpen(true)} className="relative active:opacity-60 transition-opacity">
            <Bell className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} />
            <div className="absolute -top-[1px] right-[1px] w-[7px] h-[7px] bg-[#ff3b30] rounded-full border-[1.5px] border-[#f4f5f8]"></div>
          </button>
          <button className="w-[28px] h-[28px] rounded-full bg-blue-100 overflow-hidden flex items-center justify-center active:scale-95 transition-transform shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <div className="px-[16px] space-y-[14px]">
        <div className="flex items-center justify-between pt-1">
          <button className="flex items-center space-x-[4px] bg-white h-[34px] px-[10px] rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] whitespace-nowrap active:scale-95 transition-transform">
            <Calendar className="w-[15px] h-[15px] text-[#8e8e93]" strokeWidth={2} />
            <span className="text-[13px] font-medium text-[#1c1c1e]">2026年4月</span>
            <ChevronDown className="w-[13px] h-[13px] text-[#8e8e93]" strokeWidth={2.5} />
          </button>
          <div className="flex bg-white rounded-[8px] p-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] shrink-0">
            <button className="w-[36px] py-[4px] text-[12px] font-semibold text-[#1677ff] bg-[#f0f5ff] rounded-[6px]">月</button>
            <button className="w-[36px] py-[4px] text-[12px] font-medium text-[#8e8e93] active:opacity-60 transition-opacity">年</button>
            <button className="w-[46px] py-[4px] text-[12px] font-medium text-[#8e8e93] active:opacity-60 transition-opacity">自定义</button>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex items-center space-x-[6px] text-[#8e8e93] mb-[8px]"><span className="text-[13px]">本月结余 (CNY)</span><Eye className="w-[16px] h-[16px]" strokeWidth={2} /></div>
          <div className="text-[40px] font-bold text-[#1677ff] tracking-tight leading-none mb-[12px]" style={{fontFamily: 'Helvetica Neue, Arial, sans-serif'}}>40,446.45</div>
          <div className="flex items-center text-[12px]"><span className="text-[#8e8e93] mr-[8px]">较上月</span><span className="text-[#1677ff] flex items-center font-medium"><ArrowUpRight className="w-[12px] h-[12px] mr-[2px]" strokeWidth={2.5} /> 20.1%</span></div>
          <div className="absolute bottom-0 right-0 w-[65%] h-[90px] pointer-events-none">
            <div className="absolute top-[4px] right-[18%] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] text-[#1677ff] font-semibold px-[8px] py-[3px] rounded-[6px] z-10 flex flex-col items-center">
              <div className="text-[#8e8e93] text-[9px] mb-[1px] font-normal scale-90">4月30日</div><div className="text-[11px] leading-none">40,446.45</div>
            </div>
            <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
              <defs><linearGradient id="homeBlueGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1677ff" stopOpacity="0.2" /><stop offset="100%" stopColor="#1677ff" stopOpacity="0" /></linearGradient></defs>
              <path d="M-10,65 C20,65 30,75 50,60 C70,45 80,65 100,50 C120,35 140,55 160,25 C175,5 190,15 210,10" fill="none" stroke="#1677ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M-10,65 C20,65 30,75 50,60 C70,45 80,65 100,50 C120,35 140,55 160,25 C175,5 190,15 210,10 L210,80 L-10,80 Z" fill="url(#homeBlueGrad)" />
              <circle cx="160" cy="25" r="3.5" fill="#1677ff" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[14px]">
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative">
            <div className="text-[12px] text-[#8e8e93] mb-[6px]">本月收入 (CNY)</div><div className="text-[22px] font-bold text-[#10b981] mb-[8px] leading-none">47,556.16</div>
            <div className="flex items-center text-[11px]"><span className="text-[#8e8e93] mr-[6px]">较上月</span><span className="text-[#10b981] flex items-center font-medium"><ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" strokeWidth={3} /> 18.7%</span></div>
            <div className="absolute bottom-[14px] right-[14px] w-[28px] h-[28px] bg-[#ecfdf5] rounded-[8px] flex items-center justify-center"><ArrowUpRight className="w-[18px] h-[18px] text-[#10b981]" strokeWidth={2.5} /></div>
          </div>
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative">
            <div className="text-[12px] text-[#8e8e93] mb-[6px]">本月支出 (CNY)</div><div className="text-[22px] font-bold text-[#ff3b30] mb-[8px] leading-none">7,109.71</div>
            <div className="flex items-center text-[11px]"><span className="text-[#8e8e93] mr-[6px]">较上月</span><span className="text-[#ff3b30] flex items-center font-medium"><ArrowUpRight className="w-[10px] h-[10px] mr-[2px]" strokeWidth={3} /> 13.2%</span></div>
            <div className="absolute bottom-[14px] right-[14px] w-[28px] h-[28px] bg-[#fff0f0] rounded-[8px] flex items-center justify-center"><ArrowUpRight className="w-[18px] h-[18px] text-[#ff3b30] transform rotate-90" strokeWidth={2.5} /></div>
          </div>
        </div>

        <div className="flex justify-between items-center px-[16px] py-[8px]">
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform"><div className="w-[46px] h-[46px] bg-[#1677ff] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(22,119,255,0.25)]"><PenLine className="w-[20px] h-[20px] text-white" strokeWidth={2} /></div><span className="text-[12px] font-medium text-[#1c1c1e]">记一笔</span></button>
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform"><div className="w-[46px] h-[46px] bg-[#10b981] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(16,185,129,0.25)]"><PieChartIcon className="w-[20px] h-[20px] text-white" fill="currentColor" strokeWidth={1} /></div><span className="text-[12px] font-medium text-[#1c1c1e]">预算</span></button>
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform"><div className="w-[46px] h-[46px] bg-[#8b5cf6] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(139,92,246,0.25)]"><ArrowRightLeft className="w-[20px] h-[20px] text-white" strokeWidth={2} /></div><span className="text-[12px] font-medium text-[#1c1c1e]">转账</span></button>
          <button className="flex flex-col items-center space-y-[8px] active:scale-95 transition-transform"><div className="w-[46px] h-[46px] bg-[#f59e0b] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(245,158,11,0.25)]"><BarChart2 className="w-[20px] h-[20px] text-white" strokeWidth={2.5} /></div><span className="text-[12px] font-medium text-[#1c1c1e]">报表</span></button>
        </div>

        <div className="grid grid-cols-2 gap-[14px]">
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col h-[150px]">
            <div className="flex justify-between items-center mb-[8px]"><span className="text-[14px] font-semibold text-[#1c1c1e]">预算进度</span><div className="flex items-center text-[11px] text-[#8e8e93]">本月 <ChevronDown className="w-[12px] h-[12px] ml-[2px]" /></div></div>
            <div className="text-[11px] text-[#8e8e93] mb-[12px]">总预算 <span className="font-semibold text-[#1c1c1e]">20,000.00</span> CNY</div>
            <div className="flex items-center space-x-[10px] mb-auto"><div className="flex-1 h-[6px] bg-[#f0f0f0] rounded-full overflow-hidden"><div className="h-full bg-[#1677ff] rounded-full" style={{ width: '53%' }}></div></div><span className="text-[13px] font-bold text-[#1677ff]">53%</span></div>
            <div className="space-y-[6px]">
              <div className="flex justify-between items-center text-[11px]"><div className="flex items-center text-[#3a3a3c]"><div className="w-[5px] h-[5px] rounded-full bg-[#1677ff] mr-[6px]"></div>已支出</div><span className="font-semibold text-[#1c1c1e]">10,653.28</span></div>
              <div className="flex justify-between items-center text-[11px]"><div className="flex items-center text-[#8e8e93]"><div className="w-[5px] h-[5px] rounded-full bg-[#e5e5ea] mr-[6px]"></div>剩余额度</div><span className="font-semibold text-[#3a3a3c]">9,346.72</span></div>
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col h-[150px]">
             <div className="flex justify-between items-center mb-[4px]"><span className="text-[14px] font-semibold text-[#1c1c1e]">支出分类概览</span><div className="flex items-center text-[11px] text-[#8e8e93]">本月 <ChevronDown className="w-[12px] h-[12px] ml-[2px]" /></div></div>
            <div className="flex items-center justify-between flex-1">
              <div className="w-[72px] h-[72px] relative ml-[-4px]"><HomeDonutChart /></div>
              <div className="flex flex-col justify-center space-y-[4px] w-[55%]">
                {[{ label: '餐饮', value: '31.8%', color: 'bg-[#1677ff]' },{ label: '交通', value: '20.4%', color: 'bg-[#8b5cf6]' },{ label: '购物', value: '16.7%', color: 'bg-[#10b981]' },{ label: '娱乐', value: '13.5%', color: 'bg-[#fbbf24]' },{ label: '理财', value: '9.6%', color: 'bg-[#f59e0b]' },{ label: '其他', value: '8.0%', color: 'bg-[#e5e7eb]' }].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] leading-tight"><div className="flex items-center text-[#3a3a3c]"><div className={`w-[5px] h-[5px] rounded-full mr-[6px] ${item.color}`}></div>{item.label}</div><span className="text-[#8e8e93]">{item.value}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="flex justify-between items-baseline p-[20px] pb-[8px]"><h3 className="text-[15px] font-bold text-[#1c1c1e]">最近交易</h3><button className="flex items-center text-[12px] text-[#8e8e93] active:opacity-60 transition-opacity">查看全部 <ChevronRight className="w-[14px] h-[14px] ml-[2px]" strokeWidth={2.5} /></button></div>
          <div className="flex flex-col">
            {transactions.slice(0, 4).map((tx, idx) => (
              <button key={tx.id || idx} className="w-full flex items-center px-[20px] py-[14px] border-b border-[#f4f5f8] active:bg-[#f9f9f9] transition-colors text-left">
                <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 ${tx.iconBg}`}>{getIconByString(tx.iconType)}</div>
                <div className="flex-1 ml-[12px] flex justify-between items-center">
                   <div className="flex flex-col justify-center space-y-[2px]"><span className="text-[14px] font-bold text-[#1c1c1e]">{tx.title}</span><div className="flex items-center space-x-[6px]"><span className={`text-[10px] px-[4px] py-[1px] rounded-[4px] ${tx.isIncome ? 'bg-[#ecfdf5] text-[#10b981]' : 'bg-[#e6f4ff] text-[#1677ff]'}`}>{tx.isIncome ? '收入' : '支出'}</span><span className="text-[11px] font-medium text-[#8e8e93]">{tx.tag}</span></div></div>
                   <div className="flex flex-col items-end justify-center space-y-[2px]"><span className={`text-[15px] font-bold ${tx.isIncome ? 'text-[#10b981]' : 'text-[#ff3b30]'}`}>{tx.amount}</span><span className="text-[11px] font-medium text-[#8e8e93]">{tx.time}</span></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsPage = ({ setIsMessageCenterOpen }) => {
  const [activeTab, setActiveTab] = useState('月');
  return (
    <div className="bg-[#f7f8fa] font-sans text-gray-900 pb-[100px] relative overflow-x-hidden animate-in fade-in duration-300">
      <div className="px-[16px] pt-[env(safe-area-inset-top,52px)] pb-[10px] flex items-center justify-between sticky top-0 z-[15] bg-[#f7f8fa]/95 backdrop-blur-md">
        <div className="flex items-center space-x-[6px]"><LogoIcon /><span className="text-[20px] font-bold text-[#1c1c1e] italic tracking-tight" style={{fontFamily: 'Helvetica Neue, Arial, sans-serif'}}>BitLedger <span className="text-[#1677ff]">Pro</span></span></div>
        <div className="flex items-center space-x-[16px]">
          <button className="active:opacity-60 transition-opacity"><Search className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} /></button>
          <button onClick={() => setIsMessageCenterOpen(true)} className="relative active:opacity-60 transition-opacity"><Bell className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} /><div className="absolute -top-[1px] right-[1px] w-[7px] h-[7px] bg-[#ff3b30] rounded-full border-[1.5px] border-[#f7f8fa]"></div></button>
          <button className="w-[28px] h-[28px] rounded-full overflow-hidden flex items-center justify-center active:scale-95 transition-transform shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#1677ff]/10">
            <div className="w-full h-full bg-gradient-to-b from-[#4a90e2] to-[#0052cc] flex items-center justify-center"><div className="w-[12px] h-[12px] bg-white/30 rounded-full blur-[1px]"></div></div>
          </button>
        </div>
      </div>

      <div className="px-[16px] mt-[8px] flex items-center justify-between">
        <button className="flex items-center space-x-[6px] bg-white border border-[#f0f0f0] h-[36px] px-[12px] rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:scale-95 transition-all">
          <Calendar className="w-[16px] h-[16px] text-[#8e8e93]" strokeWidth={2} /><span className="text-[14px] font-medium text-[#1c1c1e]">2026年4月</span><ChevronDown className="w-[14px] h-[14px] text-[#8e8e93]" strokeWidth={2.5} />
        </button>
        <div className="flex bg-[#f4f5f8] rounded-[10px] p-[3px]">
          {['月', '年', '自定义'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-[16px] py-[5px] text-[13px] rounded-[8px] transition-all ${activeTab === tab ? 'bg-white text-[#1677ff] font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-[#e5e5ea]' : 'text-[#8e8e93] font-medium active:bg-gray-200'}`}>{tab}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMessageCenterOpen, setIsMessageCenterOpen] = useState(false);
  const { transactions, loading } = useSupabaseData();

  useEffect(() => {
    const metas = [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ];
    metas.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        html, body, #root {
          width: 100vw; height: 100dvh; overflow: hidden;
          position: fixed; overscroll-behavior: none; touch-action: none;
          background-color: #f4f5f8;
          -webkit-font-smoothing: antialiased;
        }
        .app-container {
          background-color: #f4f5f8;
          width: 100%; max-width: 430px; height: 100dvh; margin: 0 auto;
          position: relative; overflow: hidden; display: flex; flex-direction: column;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .scroll-area {
          overflow-y: auto; overflow-x: hidden; touch-action: pan-y; -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: none;
          flex: 1; position: relative; z-index: 10;
        }
      `}} />

      <div className="app-container shadow-2xl">
        <div className="scroll-area hide-scrollbar">
          {loading ? (
            <div className="flex w-full h-full items-center justify-center text-[#8e8e93] text-[14px]">正在同步数据...</div>
          ) : (
            <>
              {activeTab === 'home' && <HomePage setIsMessageCenterOpen={setIsMessageCenterOpen} transactions={transactions} />}
              {activeTab === 'bills' && <BillsScreen onTabChange={setActiveTab} />}
              {activeTab === 'stats' && <StatsPage setIsMessageCenterOpen={setIsMessageCenterOpen} transactions={transactions} />}
              {activeTab === 'assets' && <AssetsScreen onTabChange={setActiveTab} />}
            </>
          )}
        </div>

        <MessageCenterModal isOpen={isMessageCenterOpen} onClose={() => setIsMessageCenterOpen(false)} />
        {(activeTab === 'home' || activeTab === 'stats') && <GlobalTabBar activeTab={activeTab} setActiveTab={setActiveTab} />}
      </div>
    </>
  );
}
