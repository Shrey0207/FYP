import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          "Today's Money": "Today's Money",
          "Today's Users": "Today's Users",
          "New Clients": "New Clients",
          "Total Sales": "Total Sales",
          "Welcome back,": "Welcome back,",
          "Glad to see you again! Ask me anything.": "Glad to see you again! Ask me anything.",
          "Tap to record": "Tap to record",
          "Satisfaction Rate": "Satisfaction Rate",
          "From all projects": "From all projects",
          "Based on likes": "Based on likes",
          "Refferal Tracking": "Refferal Tracking",
          "Invited": "Invited",
          "people": "people",
          "Bonus": "Bonus",
          "Safety": "Safety",
          "Total score": "Total score",
          "Sales Overview": "Sales Overview",
          "more": "more",
          "in": "in",
          "Active Users": "Active Users",
          "than last week": "than last week",
          "Users": "Users",
          "Clicks": "Clicks",
          "Sales": "Sales",
          "Items": "Items",
          "Projects": "Projects",
          "done this month": "done this month",
          "COMPANIES": "Companies",
          "MEMBERS": "Members",
          "BUDGET": "Budget",
          "COMPLETION": "Completion",
          "Orders overview": "Orders overview",
          "this month": "this month",
          /////////////////////
          "dashData": {
            "boxOne": {
              "item1": {
                "name": "Chakra Vision UI Version"
              },
              "item2": {
                "name": "Add Progress Track"
              },
              "item3":{
                "name": "Fix Platform Errors"
              },
              "item4":{
                "name": "Launch our Mobile App"
              },
              "item5":{
                "name": "Add the New Pricing Page"
              },
              "item6":{
                "name": "Redesign New Online Shop"
              },
            },
            "boxTwo": {
              "item1": {
                "title": "$24,000, Design changes"
              },
              "item2": {
                "title": "New order #1832412"
              },
              "item3": {
                "title": "Server payments for April"
              },
              "item4": {
                "title": "New card added for order #4395133"
              },
              "item5": {
                "title": "New card added for order #4395133"
              },
              "item6": {
                "title": "New order #9583120"
              },
            }
          }
        },
      },
      ar: {
        translation: {
          "Today's Money": "أموال اليوم",
          "Today's Users": "مستخدمي اليوم",
          "New Clients": "عملاء جدد",
          "Total Sales": "إجمالي المبيعات",
          "Welcome back,": "مرحبا بعودتك،",
          "Glad to see you again! Ask me anything.": "سعيد لرؤيتك مرة أخرى! اسألني اي شئ.",
          "Tap to record": "اضغط للتسجيل",
          "Satisfaction Rate": "معدل الرضا",
          "From all projects": "من جميع المشاريع",
          "Based on likes": "بناء على الإعجابات",
          "Refferal Tracking": "تتبع الإحالة",
          "Invited": "مدعو",
          "people": "شخصا",
          "Bonus": "علاوة",
          "Safety": "أمان",
          "Total score": "مجموع النقاط",
          "Sales Overview": "نظرة عامة على المبيعات",
          "more": "أكثر",
          "in": "في عام",
          "Active Users": "المستخدمين النشطين",
          "than last week": "من الأسبوع الماضي",
          "Users": "المستخدمون",
          "Clicks": "نقرات",
          "Sales": "مبيعات",
          "Items": "العناصر",
          "Projects": "المشاريع",
          "done this month": "انتهى هذا الشهر",
          "COMPANIES": "شركات",
          "MEMBERS": "أفراد",
          "BUDGET": "تبرع",
          "COMPLETION": "انتهاء",
          "Orders overview": "نظرة عامة على الطلبات",
          "this month": "هذا الشهر",
          //////////////////////////
          "dashData": {
            "boxOne": {
              "item1": {
                "name": "نسخة Chakra Vision UI"
              },
              "item2": {
                "name": "إضافة مسار التقدم"
              },
              "item3":{
                "name": "إصلاح أخطاء النظام الأساسي"
              },
              "item4":{
                "name": "إطلاق تطبيق الهاتف المحمول الخاص بنا"
              },
              "item5":{
                "name": "أضف صفحة الأسعار الجديدة"
              },
              "item6":{
                "name": "إعادة تصميم متجر جديد على الإنترنت"
              },
            },
            "boxTwo": {
              "item1": {
                "title": "$24,000، تغييرات التصميم"
              },
              "item2": {
                "title": "طلب جديد #1832412"
              },
              "item3": {
                "title": "مدفوعات الخادم لشهر أبريل"
              },
              "item4": {
                "title": "تمت إضافة بطاقة جديدة للطلب #4395133"
              },
              "item5": {
                "title": "تمت إضافة بطاقة جديدة للطلب #4395133"
              },
              "item6": {
                "title": "#9583120 طلب جديد "
              },
            }
          }
        },
      },
    },
  });

export default i18n;