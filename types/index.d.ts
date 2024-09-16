export interface ArticleResponse {
  articles: Article[];
}

type ID = string;
type ISODate = string;


// Author Types

type Brooch = {
  activeCreator: boolean;
  hotCreator: boolean;
  magician: boolean;
};

type Category = {
  _id: ID;
  title: string;
  score: number;
};

type SocialLinks = {
  facebook: string;
};

type PermissionAuthHistory = {
  permissionAuthorization: number;
  timestamp: ISODate;
};

type AdRevenueConfig = {
  adRevenue: boolean;
  fixedBottomAd: boolean;
  enableTime: ISODate;
  termsAgree: boolean;
  adWelcomeSend: boolean;
  adExplanationSend: boolean;
  adWelcomeNotification: boolean;
  adClosedSendTime: ISODate;
};

type Author = {
  _id: ID;
  status: number;
  username: string;
  fullname: string;
  website: string;
  avatarUrl: string;
  intro: string;
  level: string;
  createdAt: ISODate;
  latestArticlePublishTime: ISODate;
  followCount: number;
  followToCount: number;
  followToPubCount: number;
  donateCount: number;
  nftCount: number;
  isFollowed: boolean;
  ignoreImageResize: boolean;
  isVAFHolder: boolean;
  inviterId: string;
  permissionWrite: boolean;
  permissionDonate: boolean;
  realCreator: boolean;
  brooch: Brooch;
  newCategorys: Category[];
  publishSocial: boolean;
  socialLinks: SocialLinks;
  socialUpdatedAt: ISODate;
  permissionAuthorization: number;
  permissionAuthHistories: PermissionAuthHistory[];
  isPremium: boolean;
  likeCount: number;
  collectCount: number;
  commentCount: number;
  articleCount: number;
  featuredCount: number;
  publicationCount: number;
  contentCount: number;
  adRevenueConfig: AdRevenueConfig;
};


// Article Types

type BertLabel = {
  _id: ID;
  title: string;
  score: number;
};

type SeoData = {
  tags: string[];
  youtubeLinks: string | null;
  imageLinks: string | null;
  links: string | null;
  subTitles: string | null;
};

type IndexOption = {
  isIndex: boolean;
};

type PublicationPlan = {
  _id: ID;
  groupId: ID;
  type: string;
  title: string;
  content: string;
  isContinuous: boolean;
  payDuration: number;
  price: number;
  status: number;
  roomIds: ID[];
  salonId: ID;
  position: number;
  paypalId: string;
  quota: number;
  orderCount: number;
  itemTitle: string;
  createdAt: ISODate;
  updatedAt: ISODate;
  remarkColumn: boolean;
  addressColumn: boolean;
  openScore: boolean;
  isScheduled: string | null;
  liveUserCount: number;
  isCurrentPlan: boolean;
  publicationId: ID;
  permission: number;
  refundRequestAt: ISODate;
  platformPercentage: number;
  agentPercentage: number;
};

type Publication = {
  _id: ID;
  urlId: string;
  title: string;
  isFollowed: boolean;
  thumbnailUrl: string;
  salonId: ID;
  abstract: string;
  backgroundImgUrl: string;
  isNeedPay: boolean;
  isPay: boolean;
  isPremium: boolean;
  status: number;
  ownerId: ID;
  newCategorys: Category[];
  latestArticleTime: ISODate;
  platformPercentage: number;
  agentPercentage: number;
  followCount: number;
  orderCount: number;
  articleCount: number;
  type: number;
  ignoreImageResize: boolean;
  createdAt: ISODate;
  liveUserCount: number;
  position: number;
  plans: PublicationPlan[];
  subscribing: boolean;
  canEdit: boolean;
};

type Room = {
  _id: ID;
  title: string;
  isPay: boolean;
  thumbnailUrl: string;
  ownerId: ID;
  salonId: ID;
  pageview: number;
  payArticleCount: number;
  publicArticleCount: number;
  payPostCount: number;
  publicPostCount: number;
  followCount: number;
  position: number;
  adult: boolean;
  urlId: string;
  contentCount: number;
};

type CurrentDraft = {
  title: string;
};

type Article = {
  _id: ID;
  title: string;
  abstract: string;
  thumbnailUrl: string;
  thumbnailPos: string | null;
  noThumbnailImage: boolean;
  status: number;
  userId: ID;
  salonId: ID;
  publicationId: ID;
  publicationIds: ID[];
  adult: boolean;
  isInvestment: boolean;
  isPay: boolean;
  isTrialRead: boolean;
  readingTime: number;
  wordsCount: number;
  pasteWordsCount: number;
  limitTimeRead: ISODate;
  sendFullArticleMail: boolean;
  collectCount: number;
  likeCount: number;
  commentCount: number;
  pageview: number;
  newPageview: number;
  readCount: number;
  canonicalURL: string;
  systemFeatured: boolean;
  featured: boolean;
  featuredEDM: boolean;
  featuredCatalog: string;
  systemFeaturedAt: ISODate;
  featuredAt: ISODate;
  premiumFeaturedAt: ISODate;
  selfPromoted: boolean;
  isSchedule: boolean;
  readyPublishAt: ISODate;
  bertLabels: BertLabel[];
  newCategory: Category;
  seoData: SeoData;
  brooch: {
    editorFeatured: boolean;
  };
  spam: number;
  indexOption: IndexOption;
  createdAt: ISODate;
  updatedAt: ISODate;
  lastPublishAt: ISODate;
  user: Author;
  publication: Publication;
  rooms: Room[];
  isLiked: boolean;
  isCollected: boolean;
  isView: boolean;
  hasPinned: boolean;
  versionCount: number;
  score: number;
  source: string;
  currentDraft: CurrentDraft;
};
