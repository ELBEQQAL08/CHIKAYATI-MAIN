// db.ts
import Dexie, { Table } from 'dexie';

export interface ComList {}

export interface User {
  id?: number;
  cin: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  locationOfBirth: string;
  gender: string;
  locationOfVillage: string;
}

export interface Compliant {
  id?: number;
  userId: number;
  type: string;
  propertyOfCompliant: string;
  compliantDetails: string;
  possibleSolutions: string;
  status: string;
}

export class AppDB extends Dexie {
  users!: Table<User, number>;
  compliants!: Table<Compliant, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      users: '++id',
      compliants: '++id, userId',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const userId = await db.users.add({
      cin: 'X123',
      firstName: 'يوسف',
      lastName: 'يوسف',
      birthdate: '09-12-1994',
      locationOfBirth: 'سلا',
      gender: 'دكر',
      locationOfVillage: 'سلا',
    });
    await db.compliants.bulkAdd([
      {
        userId,
        type: 'أمان',
        propertyOfCompliant: 'التحكم في الوصول',
        compliantDetails: 'وصول غير مصرح به إلى لوحة الإدارة',
        possibleSolutions: 'تنفيذ المصادقة الثنائية',
        status: 'قيد الانتظار',
      },
      {
        userId,
        type: 'أداء',
        propertyOfCompliant: 'وقت التحميل',
        compliantDetails: 'وقت تحميل الصفحة الرئيسية طويل',
        possibleSolutions: 'تحسين الصور واستخدام شبكة توزيع المحتوى',
        status: 'قيد التنفيذ',
      },
      {
        userId,
        type: 'سهولة الاستخدام',
        propertyOfCompliant: 'التنقل',
        compliantDetails: 'قائمة التنقل مربكة',
        possibleSolutions: 'إعادة تصميم هيكل التنقل',
        status: 'تم الحل',
      },
      {
        userId,
        type: 'تصميم',
        propertyOfCompliant: 'اتساق واجهة المستخدم',
        compliantDetails: 'أنماط الأزرار غير متسقة عبر الصفحات',
        possibleSolutions: 'توحيد أنماط الأزرار في CSS',
        status: 'قيد الانتظار',
      },
      {
        userId,
        type: 'وظائف',
        propertyOfCompliant: 'إرسال النماذج',
        compliantDetails: 'فشل إرسال النموذج مع بعض المدخلات',
        possibleSolutions: 'إصلاح التحقق من المدخلات ومعالجة الأخطاء',
        status: 'قيد التنفيذ',
      },
      {
        userId,
        type: 'توافق',
        propertyOfCompliant: 'دعم المتصفح',
        compliantDetails: 'الموقع لا يعرض بشكل صحيح في فايرفوكس',
        possibleSolutions: 'اختبار وإصلاح مشاكل CSS/JS لفايرفوكس',
        status: 'قيد الانتظار',
      },
      {
        userId,
        type: 'محتوى',
        propertyOfCompliant: 'أخطاء إملائية',
        compliantDetails: 'وجود أخطاء إملائية متعددة في صفحة نبذة عنا',
        possibleSolutions: 'مراجعة وتصحيح المحتوى',
        status: 'تم الحل',
      },
    ]);
  }
}

export const db = new AppDB();
