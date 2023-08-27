export interface UserModel {
    SessionKey: string;
    SessionID: number;
    UserID: number;
    Username: string;
    BranchId: string;
    DisplayName: string;
    CreateDate: Date;
    LastAccess: Date;
    ClientIP: string;
    DNSName: string;
    SessionStatus: string;
    TerminatedUsername: null;
    Description: null;
    WorkingDate: Date;
    BatchDate: Date;
    SystemDate: Date;
    SettleDate: Date;
    SystemStatus: string;
    AllowDevelop: string;
    AllowViewAllData: string;
    LanguageID: string;
    RequireResetPassword: null;
    ExtraData: ExtraData;
  }
  
  export interface ExtraData {
    ISADMIN: string;
    ISUSECA: string;
    MAX_VIDEO_SECOND: string;
    DEPOSIT_TUTORIAL: string;
  }
  