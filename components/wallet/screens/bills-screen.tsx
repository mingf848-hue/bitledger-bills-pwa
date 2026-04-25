/* eslint-disable @typescript-eslint/ban-ts-comment, @next/next/no-img-element */
// @ts-nocheck
'use client';
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Bell, 
  Calendar, 
  ChevronDown, 
  Filter, 
  ChevronRight,
  Home, 
  FileText, 
  PieChart, 
  Wallet,
  Landmark,
  X,
  CreditCard,
  Tag as TagIcon,
  CalendarDays,
  Pen,
  Check,
  ChevronLeft,
  AlertTriangle,
  ArrowUpRight
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

const OpenAiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] text-white">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9847 5.9847 0 0 0 3.989-2.9 6.051 6.051 0 0 0-.7388-7.0732ZM13.2599 22.4278a4.4842 4.4842 0 0 1-2.9022-1.0664l.0567-.0333 4.8872-2.8223a.7925.7925 0 0 0 .3962-.684v-6.0416l2.1274 1.2284v5.334a4.526 4.526 0 0 1-4.5653 4.0852ZM5.2891 19.34a4.4842 4.4842 0 0 1-.6283-3.0315l.0614.0284 4.8919 2.8223a.7925.7925 0 0 0 .7925 0l5.2319-3.0208v2.4568L10.364 21.645A4.5308 4.5308 0 0 1 5.2891 19.34ZM2.8687 11.2359a4.4842 4.4842 0 0 1 2.274-2.1002v6.1031a.7925.7925 0 0 0 .3962.6888l5.2319 3.0208-2.1274 1.2284-5.2698-3.0397a4.5308 4.5308 0 0 1-.5049-5.8912h.0048ZM18.711 11.2359a4.4842 4.4842 0 0 1-2.274 2.1002V7.233a.7925.7925 0 0 0-.3962-.6888L10.8089 3.5234l2.1274-1.2284 5.2698 3.0397a4.5308 4.5308 0 0 1 .5049 5.8912h-.0048ZM10.7402 1.5722a4.4842 4.4842 0 0 1 2.9022 1.0664l-.0567.0333-4.8872 2.8223a.7925.7925 0 0 0-.3962.684v6.0416L6.1749 10.991V5.6571A4.526 4.526 0 0 1 10.7402 1.5722ZM18.711 4.66a4.4842 4.4842 0 0 1 .6283 3.0315l-.0614-.0284-4.8919-2.8223a.7925.7925 0 0 0-.7925 0l-5.2319 3.0208V5.4048l5.2746-3.054A4.5308 4.5308 0 0 1 18.711 4.66ZM14.9213 11.4582l-2.9211 1.6868-2.9211-1.6868v-3.3783l2.9211-1.6868 2.9211 1.6868v3.3783Z" />
  </svg>
);

const UsdtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white">
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#26A17B"/>
    <path d="M13.435 10.822v2.855c1.64.088 2.923.447 3.527.915.688.535 1.066 1.258 1.066 2.04 0 .783-.378 1.505-1.066 2.04-.604.468-1.887.827-3.527.915v2.855h-2.87v-2.855c-1.64-.088-2.923-.447-3.527-.915-.688-.535-1.066-1.258-1.066-2.04 0-.783.378-1.505 1.066-2.04.604-.468 1.887-.827 3.527-.915v-2.855h2.87zm-1.435 4.39c2.518 0 4.56-1.12 4.56-2.5s-2.042-2.5-4.56-2.5-4.56 1.12-4.56 2.5 2.042 2.5 4.56 2.5z" fill="white"/>
  </svg>
);

const BitgetIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#00e5c0]">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    <circle cx="12" cy="12" r="4" fill="black" />
  </svg>
);

const AmazonIcon = () => (
  <div className="text-white font-bold text-[14px] leading-none" style={{ fontFamily: 'Georgia, serif' }}>a</div>
);

const MastercardIcon = () => (
  <div className="flex -space-x-[6px]">
    <div className="w-[11px] h-[11px] rounded-full bg-[#ff3b30] opacity-90 mix-blend-multiply"></div>
    <div className="w-[11px] h-[11px] rounded-full bg-[#ffcc00] opacity-90 mix-blend-multiply"></div>
  </div>
);

const MashreqLogoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]">
    <path d="M12 2C17.52 2 22 6.48 22 12c0 1.66-.41 3.22-1.14 4.6l-5.6-3.23c.47-.85.74-1.84.74-2.87 0-3.31-2.69-6-6-6-1.03 0-2.02.27-2.87.74L3.9 1.64C5.28.91 6.84.5 8.5.5h3.5z" fill="#f37021"/>
    <path d="M2.5 8.5c-.91 1.38-1.5 2.94-1.5 4.6 0 5.52 4.48 10 10 10 1.66 0 3.22-.59 4.6-1.5l-3.23-5.6c-.85.47-1.84.74-2.87.74-3.31 0-6-2.69-6-6 0-1.03.27-2.02.74-2.87L1.01 8.5z" fill="#ffb612"/>
  </svg>
);

const AlipayLogo = () => (
  <div className="w-[18px] h-[18px] bg-[#1677ff] rounded-full text-white font-bold text-[11px] flex items-center justify-center leading-none" style={{ fontFamily: 'sans-serif' }}>支</div>
);

const OkxIcon = () => (
  <div className="w-[20px] h-[20px] bg-black rounded-full flex items-center justify-center">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px] text-white">
      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
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

const CheckCircleSolid = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]">
    <circle cx="12" cy="12" r="12" fill="#1677ff"/>
    <path d="M16.5 8.5L10.5 14.5L7.5 11.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const AdcbLogoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]">
    <path d="M12 2L2 20h20L12 2z" fill="#ed1c24" opacity="0.9"/>
    <path d="M12 8l-5 9h10l-5-9z" fill="white"/>
    <path d="M12 11l-2 4h4l-2-4z" fill="#1c1c1e"/>
  </svg>
);

// ==========================================
// Data Models & Mock Data
// ==========================================
type TagType = 'shopping' | 'subscription' | 'investment' | 'transfer' | 'transport';

interface Transaction {
  id: string;
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tag: string;
  tagType: TagType;
  amount: string;
  isIncome: boolean;
  time: string;
  fullDate: string;
  currency: string;
  paymentMethod: string;
  note?: string; 
}

interface DateGroup {
  dateLabel: string;
  totalExpense: string;
  totalIncome: string;
  currency: string;
  transactions: Transaction[];
}

const initialBillsData: DateGroup[] = [
  {
    dateLabel: '今天 4月23日',
    totalExpense: '522.45',
    totalIncome: '3,100.00',
    currency: 'AED',
    transactions: [
      { id: '1', iconBg: 'bg-black', icon: <AppleIcon />, title: 'Apple Pay 自动记账', subtitle: 'ADCB **** 1234', tag: '购物', tagType: 'shopping', amount: '-89.90', isIncome: false, time: '18:45', fullDate: '2026年4月23日 18:45', currency: 'AED', paymentMethod: 'Apple Pay', note: '给家人买礼物' },
      { id: '2', iconBg: 'bg-[#10a37f]', icon: <OpenAiIcon />, title: 'Ai', subtitle: 'ADCB **** 1234', tag: '订阅', tagType: 'subscription', amount: '-19.99', isIncome: false, time: '16:32', fullDate: '2026年4月23日 16:32', currency: 'AED', paymentMethod: 'ADCB' },
      { id: '3', iconBg: 'bg-[#26A17B]', icon: <UsdtIcon />, title: 'OKX 理财收益', subtitle: 'OKX 资金账户', tag: '理财', tagType: 'investment', amount: '+1,200.00', isIncome: true, time: '09:15', fullDate: '2026年4月23日 09:15', currency: 'USDT', paymentMethod: 'OKX' },
      { id: '4', iconBg: 'bg-[#5c8af0]', icon: <Landmark className="w-[16px] h-[16px] text-white" />, title: '转账给张三', subtitle: 'ADCB **** 1234', tag: '转账', tagType: 'transfer', amount: '-500.00', isIncome: false, time: '08:20', fullDate: '2026年4月23日 08:20', currency: 'AED', paymentMethod: 'ADCB' }
    ]
  },
  {
    dateLabel: '昨天 4月22日',
    totalExpense: '1,245.60',
    totalIncome: '6,500.00',
    currency: 'AED',
    transactions: [
      { id: '5', iconBg: 'bg-[#1677ff]', icon: <AlipayLogo />, title: '支付宝 转账', subtitle: '支付宝账户', tag: '转账', tagType: 'transfer', amount: '+2,500.00', isIncome: true, time: '21:35', fullDate: '2026年4月22日 21:35', currency: 'AED', paymentMethod: '支付宝' },
      { id: '6', iconBg: 'bg-black', icon: <BitgetIcon />, title: 'Bitget 理财收益', subtitle: 'Bitget 资金账户', tag: '理财', tagType: 'investment', amount: '+4,000.00', isIncome: true, time: '14:10', fullDate: '2026年4月22日 14:10', currency: 'USDT', paymentMethod: 'Bitget' },
      { id: '7', iconBg: 'bg-[#fee000]', icon: <div className="w-[16px] h-[16px] bg-black text-[#fee000] rounded-[4px] flex items-center justify-center font-bold text-[11px]">n</div>, title: 'Noon', subtitle: 'Mashreq **** 5678', tag: '购物', tagType: 'shopping', amount: '-245.60', isIncome: false, time: '11:05', fullDate: '2026年4月22日 11:05', currency: 'AED', paymentMethod: 'Mashreq Bank' },
      { id: '11', iconBg: 'bg-[#e6f4ff]', icon: <CashIcon />, title: '线下超市购物', subtitle: '现金支付', tag: '购物', tagType: 'shopping', amount: '-1,000.00', isIncome: false, time: '09:00', fullDate: '2026年4月22日 09:00', currency: 'AED', paymentMethod: '现金' }
    ]
  },
  {
    dateLabel: '4月21日 星期一',
    totalExpense: '1,862.36',
    totalIncome: '2,300.00',
    currency: 'AED',
    transactions: [
      { id: '8', iconBg: 'bg-[#232f3e]', icon: <AmazonIcon />, title: 'Amazon.ae', subtitle: 'ADCB **** 1234', tag: '购物', tagType: 'shopping', amount: '-112.36', isIncome: false, time: '20:22', fullDate: '2026年4月21日 20:22', currency: 'AED', paymentMethod: 'ADCB' },
      { id: '9', iconBg: 'bg-white border border-gray-200', icon: <MastercardIcon />, title: 'Careem', subtitle: 'Mashreq **** 5678', tag: '交通', tagType: 'transport', amount: '-35.00', isIncome: false, time: '18:08', fullDate: '2026年4月21日 18:08', currency: 'AED', paymentMethod: 'Mashreq Bank' },
      { id: '10', iconBg: 'bg-[#26A17B]', icon: <UsdtIcon />, title: 'OKX 理财收益', subtitle: 'OKX 资金账户', tag: '理财', tagType: 'investment', amount: '+2,300.00', isIncome: true, time: '10:30', fullDate: '2026年4月21日 10:30', currency: 'USDT', paymentMethod: 'OKX' }
    ]
  }
];

const FILTER_OPTIONS = [
  { id: 'all', name: '全部支付方式', icon: <CheckCircleSolid /> },
  { id: 'ADCB', name: 'ADCB', icon: <AdcbLogoIcon /> },
  { id: 'Apple Pay', name: 'Apple Pay', icon: <div className="w-[20px] h-[20px] bg-black rounded-full flex items-center justify-center"><AppleIcon /></div> },
  { id: 'Mashreq Bank', name: 'Mashreq Bank', icon: <MashreqLogoIcon /> },
  { id: '支付宝', name: '支付宝', icon: <AlipayLogo /> },
  { id: 'OKX', name: 'OKX', icon: <OkxIcon /> },
  { id: 'Bitget', name: 'Bitget', icon: <div className="w-[20px] h-[20px] bg-black rounded-full flex items-center justify-center"><BitgetIcon /></div> },
  { id: '现金', name: '现金', icon: <CashIcon /> },
];

const CALENDAR_DAYS = [
  { val: 30, type: 'prev' }, { val: 31, type: 'prev' }, 
  { val: 1, type: 'curr' }, { val: 2, type: 'curr' }, { val: 3, type: 'curr' }, { val: 4, type: 'curr' }, { val: 5, type: 'curr' },
  { val: 6, type: 'curr' }, { val: 7, type: 'curr' }, { val: 8, type: 'curr' }, { val: 9, type: 'curr' }, { val: 10, type: 'curr' }, { val: 11, type: 'curr' }, { val: 12, type: 'curr' },
  { val: 13, type: 'curr' }, { val: 14, type: 'curr' }, { val: 15, type: 'curr' }, { val: 16, type: 'curr' }, { val: 17, type: 'curr' }, { val: 18, type: 'curr' }, { val: 19, type: 'curr' },
  { val: 20, type: 'curr' }, { val: 21, type: 'curr' }, { val: 22, type: 'curr' }, { val: 23, type: 'curr' }, { val: 24, type: 'curr' }, { val: 25, type: 'curr' }, { val: 26, type: 'curr' },
  { val: 27, type: 'curr' }, { val: 28, type: 'curr' }, { val: 29, type: 'curr' }, { val: 30, type: 'curr' }, 
  { val: 1, type: 'next' }, { val: 2, type: 'next' }, { val: 3, type: 'next' }
];

const Tag = ({ type, text }: { type: TagType, text: string }) => {
  const styles = {
    shopping: 'bg-[#fff0f6] text-[#eb2f96]',     
    subscription: 'bg-[#f9f0ff] text-[#722ed1]', 
    investment: 'bg-[#e6f4ff] text-[#1677ff]',   
    transfer: 'bg-[#fff7e6] text-[#ff8c00]',     
    transport: 'bg-[#e6f4ff] text-[#1677ff]',    
  };
  return (
    <span className={`text-[10px] px-[6px] py-[2px] rounded-[4px] font-medium ${styles[type]}`}>
      {text}
    </span>
  );
};

// ==========================================
// Page Component
// ==========================================
export function BillsScreen({ onTabChange }) {
  const [data, setData] = useState<DateGroup[]>(initialBillsData);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [tempNote, setTempNote] = useState('');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(23);
  const [isMessageCenterOpen, setIsMessageCenterOpen] = useState(false);

  const handleOpenModal = (tx: Transaction) => {
    setSelectedTx(tx);
    setTempNote(tx.note || tx.title);
  };

  const handleSave = () => {
    if (!selectedTx) return;
    setData(prevData => prevData.map(group => ({
      ...group,
      transactions: group.transactions.map(tx => {
        if (tx.id === selectedTx.id) {
          return { ...tx, title: tempNote || tx.title, note: tempNote };
        }
        return tx;
      })
    })));
    setSelectedTx(null);
  };

  const filteredData = useMemo(() => {
    return data.map(group => {
      const validTxs = group.transactions.filter(tx => 
        selectedFilter === 'all' || tx.paymentMethod === selectedFilter
      );
      if (validTxs.length === 0) return null;

      const expense = validTxs.filter(t => !t.isIncome).reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^\d.]/g, '')), 0);
      const income = validTxs.filter(t => t.isIncome).reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^\d.]/g, '')), 0);

      return {
        ...group,
        totalExpense: expense.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
        totalIncome: income.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
        transactions: validTxs
      };
    }).filter(Boolean) as DateGroup[];
  }, [data, selectedFilter]);

  return (
    <div className="bg-[#f4f5f8] min-h-full w-full max-w-[430px] font-sans text-gray-900 pb-[16px] mx-auto relative overflow-x-hidden overscroll-none">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Header */}
      <div className="px-[16px] pt-[52px] pb-[10px] flex items-center justify-between sticky top-0 z-[15] bg-[#f4f5f8]/95 backdrop-blur-sm overscroll-none">
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
          <button onClick={() => setIsMessageCenterOpen(!isMessageCenterOpen)} className="relative active:opacity-60 transition-opacity">
            <Bell className="w-[20px] h-[20px] text-[#1c1c1e]" strokeWidth={2} />
            <div className="absolute -top-[1px] right-[1px] w-[7px] h-[7px] bg-[#ff3b30] rounded-full border-[1.5px] border-[#f4f5f8]"></div>
          </button>
          <button className="w-[28px] h-[28px] rounded-full bg-blue-100 overflow-hidden flex items-center justify-center active:scale-95 transition-transform shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      {/* Notification Message Center Modal */}
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
                      <div className="flex items-start bg-white border border-[#f4f5f8] rounded-[16px] p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative cursor-pointer active:bg-gray-50 transition-colors">
                         <div className="w-[36px] h-[36px] rounded-full bg-[#10b981] flex items-center justify-center shrink-0 mr-[12px] text-white font-bold text-[18px]">¥</div>
                         <div className="flex-1 pr-[16px]">
                            <div className="text-[13px] font-bold text-[#1c1c1e]">USDT兑人民币汇率</div>
                            <div className="text-[14px] text-[#10b981] font-medium mt-[2px] mb-[2px]">1 USDT ≈ ¥7.24</div>
                            <div className="text-[11px] text-[#8e8e93]">实时参考</div>
                         </div>
                         <div className="w-[6px] h-[6px] rounded-full bg-[#10b981] absolute top-[26px] right-[14px]"></div>
                      </div>
                      <div className="flex items-start bg-white border border-[#f4f5f8] rounded-[16px] p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative cursor-pointer active:bg-gray-50 transition-colors">
                         <div className="w-[36px] h-[36px] rounded-full bg-[#10b981] flex items-center justify-center shrink-0 mr-[12px] text-white font-bold text-[12px]">AED</div>
                         <div className="flex-1 pr-[16px]">
                            <div className="text-[13px] font-bold text-[#1c1c1e]">USDT兑AED汇率</div>
                            <div className="text-[14px] text-[#10b981] font-medium mt-[2px] mb-[2px]">1 USDT ≈ AED 3.67</div>
                            <div className="text-[11px] text-[#8e8e93]">实时参考</div>
                         </div>
                         <div className="w-[6px] h-[6px] rounded-full bg-[#10b981] absolute top-[26px] right-[14px]"></div>
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

      {/* Filters Section 1 */}
      <div className="px-[16px] flex items-center justify-between space-x-[8px] mt-[4px] relative z-30">
        <div className="relative">
          <button onClick={() => setIsCalendarOpen(!isCalendarOpen)} className={`flex items-center space-x-[4px] h-[34px] px-[10px] rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] whitespace-nowrap active:scale-95 transition-all ${isCalendarOpen ? 'bg-[#f4f8ff] border border-[#1677ff] text-[#1677ff]' : 'bg-white border border-transparent text-[#1c1c1e]'}`}>
            <Calendar className={`w-[15px] h-[15px] ${isCalendarOpen ? 'text-[#1677ff]' : 'text-[#8e8e93]'}`} strokeWidth={2} />
            <span className="text-[13px] font-medium">2026年4月</span>
            <ChevronDown className={`w-[13px] h-[13px] ${isCalendarOpen ? 'text-[#1677ff]' : 'text-[#8e8e93]'}`} strokeWidth={2.5} />
          </button>
          {isCalendarOpen && (
            <>
              <div className="fixed inset-0 z-[40]" onClick={() => setIsCalendarOpen(false)}></div>
              <div className="absolute top-[42px] left-0 w-[310px] bg-white rounded-[20px] p-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-[50] animate-in fade-in zoom-in-95 duration-100 origin-top-left">
                <div className="absolute -top-[5px] left-[45px] w-[12px] h-[12px] bg-white transform rotate-45 border-t border-l border-[#f0f0f0] rounded-sm"></div>
                <div className="flex bg-[#f4f5f8] p-[3px] rounded-[10px] mb-[16px]">
                    <button className="flex-1 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded-[8px] py-[6px] text-[#1677ff] text-[14px] font-semibold">月</button>
                    <button className="flex-1 text-[#8e8e93] text-[14px] font-medium py-[6px]">年</button>
                </div>
                <div className="flex items-center justify-between mb-[14px] px-[8px]">
                    <button className="p-1 active:opacity-50"><ChevronLeft className="w-[18px] h-[18px] text-[#1677ff]" strokeWidth={2.5} /></button>
                    <span className="text-[15px] font-medium text-[#1c1c1e]">2026年4月</span>
                    <button className="p-1 active:opacity-50"><ChevronRight className="w-[18px] h-[18px] text-[#1677ff]" strokeWidth={2.5} /></button>
                </div>
                <div className="grid grid-cols-7 text-center mb-[8px]">
                    {['一', '二', '三', '四', '五', '六', '日'].map(d => (
                      <div key={d} className="text-[12px] text-[#8e8e93] font-medium py-[4px]">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-y-[6px] text-center">
                    {CALENDAR_DAYS.map((dayObj, i) => {
                      const isSelected = dayObj.type === 'curr' && dayObj.val === selectedDate;
                      return (
                        <button key={i} onClick={() => { if(dayObj.type === 'curr') setSelectedDate(dayObj.val); }} className="w-[32px] h-[32px] mx-auto flex items-center justify-center relative">
                          <div className={`w-full h-full flex items-center justify-center rounded-full text-[15px] transition-all
                            ${isSelected ? 'bg-[#1677ff] text-white font-semibold shadow-[0_2px_8px_rgba(22,119,255,0.4)]' : dayObj.type === 'curr' ? 'text-[#1c1c1e] hover:bg-[#f4f5f8] font-normal' : 'text-[#d1d1d6] font-normal'}
                          `}>
                            {dayObj.val}
                          </div>
                        </button>
                      );
                    })}
                </div>
                <div className="flex items-center justify-between mt-[16px] px-[4px]">
                    <button onClick={() => setSelectedDate(23)} className="text-[14px] text-[#1677ff] font-medium px-[8px] py-[4px] active:opacity-60">今天</button>
                    <button onClick={() => setIsCalendarOpen(false)} className="bg-[#1677ff] text-white px-[20px] py-[8px] rounded-[10px] text-[13px] font-semibold active:bg-[#1565d8] shadow-[0_2px_10px_rgba(22,119,255,0.2)]">确定</button>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="flex-1 flex items-center bg-white h-[34px] px-[10px] rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] cursor-text">
          <Search className="w-[15px] h-[15px] text-[#c7c7cc] mr-[6px]" strokeWidth={2} />
          <input type="text" placeholder="搜索账单、商家、备注" className="bg-transparent border-none outline-none text-[13px] text-[#1c1c1e] w-full placeholder-[#c7c7cc]"/>
        </div>

        <div className="relative">
          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className={`flex items-center space-x-[2px] h-[34px] px-[10px] rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] whitespace-nowrap active:scale-95 transition-all ${isFilterOpen || selectedFilter !== 'all' ? 'bg-[#f4f8ff] border border-[#1677ff] text-[#1677ff]' : 'bg-white border border-transparent text-[#1c1c1e]'}`}>
            <span className="text-[13px] font-medium">筛选</span>
            <Filter className={`w-[13px] h-[13px] ${isFilterOpen || selectedFilter !== 'all' ? 'text-[#1677ff]' : 'text-[#1c1c1e]'}`} strokeWidth={2} />
          </button>

          {isFilterOpen && (
            <>
              <div className="fixed inset-0 z-[40]" onClick={() => setIsFilterOpen(false)}></div>
              <div className="absolute top-[42px] right-0 w-[210px] bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-[50] animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                <div className="absolute -top-[5px] right-[18px] w-[12px] h-[12px] bg-white transform rotate-45 border-t border-l border-[#f0f0f0] rounded-sm"></div>
                <div className="relative bg-white rounded-[16px] overflow-hidden py-[8px]">
                  {FILTER_OPTIONS.map((opt) => {
                    const isSelected = selectedFilter === opt.id;
                    return (
                      <button key={opt.id} onClick={() => { setSelectedFilter(opt.id); setIsFilterOpen(false); }} className="w-full flex items-center justify-between px-[16px] py-[10px] hover:bg-[#f9f9f9] active:bg-[#f4f5f8] transition-colors text-left">
                        <div className="flex items-center space-x-[12px]">
                          {opt.icon}
                          <span className={`text-[14px] ${isSelected && opt.id === 'all' ? 'text-[#1c1c1e] font-semibold' : 'text-[#3a3a3c] font-medium'}`}>{opt.name}</span>
                        </div>
                        {isSelected && <Check className="w-[18px] h-[18px] text-[#1677ff]" strokeWidth={2.5} />}
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Filters Section 2 */}
      <div className="px-[16px] mt-[12px] flex items-center justify-between relative z-10">
        <div className="flex space-x-[6px]">
          {['全部', '支出', '收入', '理财', '转账'].map((item, index) => (
            <button key={index} className={`flex h-[28px] w-[44px] items-center justify-center whitespace-nowrap rounded-[8px] !text-[12px] leading-none font-medium transition-all active:scale-95 ${index === 0 ? 'bg-[#1677ff] text-white shadow-[0_2px_8px_rgba(22,119,255,0.2)]' : 'bg-white text-[#5c5c5e] shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:bg-gray-50'}`} style={{ fontSize: 12, lineHeight: '12px' }}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex bg-white rounded-[8px] p-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] shrink-0">
          <button className="flex h-[28px] w-[44px] items-center justify-center !text-[12px] leading-none font-semibold text-[#1677ff] active:opacity-60 transition-opacity" style={{ fontSize: 12, lineHeight: '12px' }}>日</button>
          <button className="flex h-[28px] w-[44px] items-center justify-center !text-[12px] leading-none font-medium text-[#8e8e93] active:opacity-60 transition-opacity hover:text-gray-600" style={{ fontSize: 12, lineHeight: '12px' }}>周</button>
          <button className="flex h-[28px] w-[44px] items-center justify-center !text-[12px] leading-none font-medium text-[#8e8e93] active:opacity-60 transition-opacity hover:text-gray-600" style={{ fontSize: 12, lineHeight: '12px' }}>月</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-[16px] mt-[16px] relative z-10">
        <div className="bg-white rounded-[20px] p-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex relative">
          <div className="flex-1 pr-[16px] relative">
            <div className="text-[11px] text-[#8e8e93] mb-[4px]">本月支出 (AED)</div>
            <div className="text-[20px] font-bold text-[#ff3b30] mb-[6px] leading-none">7,109.71</div>
            <div className="flex items-center text-[10px]">
              <span className="text-[#8e8e93] mr-[4px]">较上月</span>
              <span className="text-[#ff3b30] flex items-center font-medium"><ArrowUpRight className="w-[9px] h-[9px] mr-[1px]" strokeWidth={3} /> 13.2%</span>
            </div>
            <button className="absolute bottom-[2px] right-[12px] w-[24px] h-[24px] bg-[#fff0f0] rounded-[6px] flex items-center justify-center active:bg-red-100 transition-colors">
               <ArrowUpRight className="w-[16px] h-[16px] text-[#ff3b30] transform rotate-90" strokeWidth={2.5} />
            </button>
          </div>
          <div className="w-[1px] bg-[#f0f0f0] my-[2px]"></div>
          <div className="flex-1 pl-[20px] relative">
            <div className="text-[11px] text-[#8e8e93] mb-[4px]">本月收入 (AED)</div>
            <div className="text-[20px] font-bold text-[#10b981] mb-[6px] leading-none">47,556.16</div>
            <div className="flex items-center text-[10px]">
              <span className="text-[#8e8e93] mr-[4px]">较上月</span>
              <span className="text-[#10b981] flex items-center font-medium"><ArrowUpRight className="w-[9px] h-[9px] mr-[1px]" strokeWidth={3} /> 18.7%</span>
            </div>
            <button className="absolute bottom-[2px] right-[4px] w-[24px] h-[24px] bg-[#ecfdf5] rounded-[6px] flex items-center justify-center active:bg-emerald-100 transition-colors">
               <ArrowUpRight className="w-[16px] h-[16px] text-[#10b981]" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="px-[16px] mt-[16px] space-y-[16px] relative z-0">
        {filteredData.length === 0 ? (
           <div className="py-[40px] text-center text-[#8e8e93] text-[13px] bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
             没有找到相关交易记录
           </div>
        ) : (
          filteredData.map((group, gIdx) => (
            <div key={gIdx} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex justify-between items-end mb-[8px] px-[4px]">
                <div className="text-[13px] font-semibold text-[#3a3a3c]">{group.dateLabel}</div>
                <div className="flex space-x-[8px] text-[11px] text-[#8e8e93]">
                  <span>支出 <span className="text-[#ff3b30] font-medium">{group.totalExpense}</span> <span className="text-[10px]">{group.currency}</span></span>
                  <span>收入 <span className="text-[#10b981] font-medium">{group.totalIncome}</span> <span className="text-[10px]">{group.currency}</span></span>
                </div>
              </div>

              <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
                {group.transactions.map((tx, tIdx) => (
                  <button key={tx.id} onClick={() => handleOpenModal(tx)} className={`w-full grid grid-cols-[36px_1fr_40px_105px] gap-[10px] items-center px-[16px] py-[12px] bg-white active:bg-[#f9f9f9] transition-colors text-left ${tIdx !== group.transactions.length - 1 ? 'border-b border-[#f4f5f8]' : ''}`}>
                    <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0 ${tx.iconBg}`}>{tx.icon}</div>
                    <div className="flex flex-col min-w-0 pr-[4px]">
                      <div className="text-[13px] font-medium text-[#1c1c1e] mb-[1px] truncate">{tx.title}</div>
                      <div className="text-[11px] text-[#8e8e93] truncate">{tx.subtitle}</div>
                    </div>
                    <div className="flex justify-center shrink-0"><Tag type={tx.tagType} text={tx.tag} /></div>
                    <div className="flex items-center justify-end space-x-[4px] min-w-0">
                      <div className="flex flex-col items-end min-w-0">
                        <div className={`text-[13px] font-semibold mb-[1px] whitespace-nowrap ${tx.isIncome ? 'text-[#10b981]' : 'text-[#ff3b30]'}`}>
                          {tx.amount} <span className="text-[10px] font-medium ml-[1px]">{tx.currency}</span>
                        </div>
                        <div className="text-[10px] text-[#8e8e93]">{tx.time}</div>
                      </div>
                      <ChevronRight className="w-[14px] h-[14px] text-[#c7c7cc] shrink-0" strokeWidth={2.5} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Transaction Detail Modal */}
      {selectedTx && (
        <div className="fixed inset-0 z-[100] flex h-[100dvh] items-center justify-center overflow-hidden bg-black/30 px-[24px] py-[max(16px,env(safe-area-inset-bottom))] backdrop-blur-[4px] transition-opacity touch-none">
          <div className="w-full max-w-[430px] relative flex max-h-full items-center justify-center">
             <div className="bg-white w-full max-h-full overflow-y-auto hide-scrollbar rounded-[24px] px-[20px] pb-[20px] pt-[16px] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 touch-pan-y">
                <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[36px] h-[4px] bg-[#e5e5ea] rounded-full"></div>
                <h3 className="text-[16px] font-bold text-[#1c1c1e] mt-[4px]">账单详情</h3>
                <button onClick={() => setSelectedTx(null)} className="absolute top-[18px] right-[16px] active:scale-90 transition-transform">
                   <X className="w-[22px] h-[22px] text-[#3a3a3c]" strokeWidth={2} />
                </button>

                <div className="flex items-center mt-[24px] mb-[20px]">
                   <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 ${selectedTx.iconBg}`}>{selectedTx.icon}</div>
                   <div className="flex-1 ml-[12px] text-[15px] font-semibold text-[#1c1c1e] truncate">{selectedTx.title}</div>
                   <div className={`text-[16px] font-bold shrink-0 ml-[8px] ${selectedTx.isIncome ? 'text-[#10b981]' : 'text-[#ff3b30]'}`}>
                      {selectedTx.amount} <span className="text-[12px] font-medium">{selectedTx.currency}</span>
                   </div>
                </div>

                <div className="flex flex-col">
                   <div className="flex justify-between items-center py-[14px] border-b border-[#f4f5f8] border-dashed">
                      <div className="flex items-center text-[#8e8e93]"><CreditCard className="w-[18px] h-[18px] mr-[8px]" strokeWidth={2} /><span className="text-[14px] font-medium text-[#5c5c5e]">账户</span></div>
                      <span className="text-[13px] font-medium text-[#1c1c1e]">{selectedTx.subtitle}</span>
                   </div>
                   <div className="flex justify-between items-center py-[14px] border-b border-[#f4f5f8] border-dashed">
                      <div className="flex items-center text-[#8e8e93]"><TagIcon className="w-[18px] h-[18px] mr-[8px]" strokeWidth={2} /><span className="text-[14px] font-medium text-[#5c5c5e]">分类</span></div>
                      <Tag type={selectedTx.tagType} text={selectedTx.tag} />
                   </div>
                   <div className="flex justify-between items-center py-[14px] border-b border-[#f4f5f8] border-dashed">
                      <div className="flex items-center text-[#8e8e93]"><CalendarDays className="w-[18px] h-[18px] mr-[8px]" strokeWidth={2} /><span className="text-[14px] font-medium text-[#5c5c5e]">时间</span></div>
                      <span className="text-[13px] font-medium text-[#1c1c1e]">{selectedTx.fullDate}</span>
                   </div>
                </div>

                <div className="mt-[20px]">
                   <div className="text-[14px] font-bold text-[#1c1c1e] mb-[10px]">备注</div>
                   <div className="border-[1.5px] border-[#1677ff] rounded-[10px] px-[12px] py-[10px] flex items-center bg-white shadow-[0_0_0_4px_rgba(22,119,255,0.1)] transition-shadow">
                      <input 
                        type="text" value={tempNote} onChange={(e) => setTempNote(e.target.value)} 
                        className="flex-1 text-[14px] font-medium text-[#1c1c1e] outline-none bg-transparent placeholder-[#c7c7cc]" 
                        placeholder="添加备注..."
                      />
                      <Pen className="w-[16px] h-[16px] text-[#8e8e93] shrink-0 ml-[8px]" strokeWidth={2} />
                   </div>
                </div>

                <div className="flex space-x-[12px] mt-[24px]">
                   <button onClick={() => setSelectedTx(null)} className="flex-1 py-[12px] rounded-[12px] border border-[#e5e5ea] text-[#3a3a3c] text-[15px] font-semibold active:bg-[#f4f5f8] transition-colors">取消</button>
                   <button onClick={handleSave} className="flex-1 py-[12px] rounded-[12px] bg-[#1677ff] text-white text-[15px] font-semibold active:bg-[#1565d8] transition-colors shadow-[0_4px_12px_rgba(22,119,255,0.25)]">保存</button>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-[#fdfdfd] border-t border-[#f0f0f0] flex justify-between items-center px-[40px] pt-[8px] pb-[max(16px,env(safe-area-inset-bottom))] z-[200]">
        <button onClick={() => onTabChange?.('home')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <Home className="w-[22px] h-[22px] text-[#8e8e93]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-medium text-[#8e8e93]">首页</span>
        </button>
        <button onClick={() => onTabChange?.('bills')} className="flex flex-col items-center active:scale-95 transition-transform w-[48px]">
          <FileText className="w-[22px] h-[22px] text-[#1677ff] fill-[#1677ff]" strokeWidth={1.5} />
          <span className="text-[10px] mt-[4px] font-semibold text-[#1677ff]">账单</span>
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
