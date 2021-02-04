-- DROP SCHEMA dbo;

CREATE SCHEMA dbo;
-- IdentityServerDbV2.dbo.AnswerActivities definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AnswerActivities GO

CREATE TABLE IdentityServerDbV2.dbo.AnswerActivities (
	Id int IDENTITY(1,1) NOT NULL,
	AnswerId int NOT NULL,
	Activity smallint NOT NULL,
	ActivityBy bigint NOT NULL,
	CONSTRAINT PK_AnswerActivities PRIMARY KEY (Id)
) GO;


-- IdentityServerDbV2.dbo.Answers definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.Answers GO

CREATE TABLE IdentityServerDbV2.dbo.Answers (
	Id int IDENTITY(1,1) NOT NULL,
	AnswerOf int NOT NULL,
	Description nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	AnsweredOn datetime2(7) DEFAULT getdate() NOT NULL,
	AnsweredBy bigint NOT NULL,
	MarkedAsBest bit NOT NULL,
	CONSTRAINT PK_Answers PRIMARY KEY (Id)
) GO;


-- IdentityServerDbV2.dbo.AspNetRoles definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AspNetRoles GO

CREATE TABLE IdentityServerDbV2.dbo.AspNetRoles (
	Id nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Name nvarchar(256) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	NormalizedName nvarchar(256) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	ConcurrencyStamp nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PK_AspNetRoles PRIMARY KEY (Id)
) GO
 CREATE  UNIQUE NONCLUSTERED INDEX RoleNameIndex ON dbo.AspNetRoles (  NormalizedName ASC  )  
	 WHERE  ([NormalizedName] IS NOT NULL)
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- IdentityServerDbV2.dbo.AspNetUsers definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AspNetUsers GO

CREATE TABLE IdentityServerDbV2.dbo.AspNetUsers (
	Id nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	UserId bigint IDENTITY(100,1) NOT NULL,
	UserName nvarchar(256) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	NormalizedUserName nvarchar(256) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Email nvarchar(256) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	NormalizedEmail nvarchar(256) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	EmailConfirmed bit NOT NULL,
	PasswordHash nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	SecurityStamp nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	ConcurrencyStamp nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	PhoneNumber nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	PhoneNumberConfirmed bit NOT NULL,
	TwoFactorEnabled bit NOT NULL,
	LockoutEnd datetimeoffset NULL,
	LockoutEnabled bit NOT NULL,
	AccessFailedCount int NOT NULL,
	CONSTRAINT PK_AspNetUsers PRIMARY KEY (Id)
) GO
 CREATE NONCLUSTERED INDEX EmailIndex ON dbo.AspNetUsers (  NormalizedEmail ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO
 CREATE  UNIQUE NONCLUSTERED INDEX UserNameIndex ON dbo.AspNetUsers (  NormalizedUserName ASC  )  
	 WHERE  ([NormalizedUserName] IS NOT NULL)
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- IdentityServerDbV2.dbo.Categories definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.Categories GO

CREATE TABLE IdentityServerDbV2.dbo.Categories (
	Id int IDENTITY(1,1) NOT NULL,
	Title nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Description nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	AddedBy bigint NOT NULL,
	AddedOn datetime2(7) DEFAULT getdate() NOT NULL,
	CONSTRAINT PK_Categories PRIMARY KEY (Id)
) GO;


-- IdentityServerDbV2.dbo.QuestionActivities definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.QuestionActivities GO

CREATE TABLE IdentityServerDbV2.dbo.QuestionActivities (
	Id int IDENTITY(1,1) NOT NULL,
	QuestionId int NOT NULL,
	Viewed bit NOT NULL,
	Activity smallint NOT NULL,
	ActivityBy bigint NOT NULL,
	CONSTRAINT PK_QuestionActivities PRIMARY KEY (Id)
) GO;


-- IdentityServerDbV2.dbo.Questions definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.Questions GO

CREATE TABLE IdentityServerDbV2.dbo.Questions (
	Id int IDENTITY(1,1) NOT NULL,
	AskedBy bigint NOT NULL,
	Title nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Description nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	AskedOn datetime2(7) DEFAULT getdate() NOT NULL,
	Category int NOT NULL,
	CONSTRAINT PK_Questions PRIMARY KEY (Id)
) GO;


-- IdentityServerDbV2.dbo.UsersInfo definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.UsersInfo GO

CREATE TABLE IdentityServerDbV2.dbo.UsersInfo (
	Id bigint IDENTITY(1,1) NOT NULL,
	FullName nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	ImageUrl nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Designation nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Team nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[Role] nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	Location nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PK_UsersInfo PRIMARY KEY (Id)
) GO;


-- IdentityServerDbV2.dbo.[__EFMigrationsHistory] definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.[__EFMigrationsHistory] GO

CREATE TABLE IdentityServerDbV2.dbo.[__EFMigrationsHistory] (
	MigrationId nvarchar(150) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ProductVersion nvarchar(32) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK___EFMigrationsHistory PRIMARY KEY (MigrationId)
) GO;


-- IdentityServerDbV2.dbo.AspNetRoleClaims definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AspNetRoleClaims GO

CREATE TABLE IdentityServerDbV2.dbo.AspNetRoleClaims (
	Id int IDENTITY(1,1) NOT NULL,
	RoleId nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ClaimType nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	ClaimValue nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PK_AspNetRoleClaims PRIMARY KEY (Id),
	CONSTRAINT FK_AspNetRoleClaims_AspNetRoles_RoleId FOREIGN KEY (RoleId) REFERENCES IdentityServerDbV2.dbo.AspNetRoles(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetRoleClaims_RoleId ON dbo.AspNetRoleClaims (  RoleId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- IdentityServerDbV2.dbo.AspNetUserClaims definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AspNetUserClaims GO

CREATE TABLE IdentityServerDbV2.dbo.AspNetUserClaims (
	Id int IDENTITY(1,1) NOT NULL,
	UserId nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ClaimType nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	ClaimValue nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PK_AspNetUserClaims PRIMARY KEY (Id),
	CONSTRAINT FK_AspNetUserClaims_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES IdentityServerDbV2.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetUserClaims_UserId ON dbo.AspNetUserClaims (  UserId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- IdentityServerDbV2.dbo.AspNetUserLogins definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AspNetUserLogins GO

CREATE TABLE IdentityServerDbV2.dbo.AspNetUserLogins (
	LoginProvider nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ProviderKey nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ProviderDisplayName nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	UserId nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK_AspNetUserLogins PRIMARY KEY (LoginProvider,ProviderKey),
	CONSTRAINT FK_AspNetUserLogins_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES IdentityServerDbV2.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetUserLogins_UserId ON dbo.AspNetUserLogins (  UserId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- IdentityServerDbV2.dbo.AspNetUserRoles definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AspNetUserRoles GO

CREATE TABLE IdentityServerDbV2.dbo.AspNetUserRoles (
	UserId nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	RoleId nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	CONSTRAINT PK_AspNetUserRoles PRIMARY KEY (UserId,RoleId),
	CONSTRAINT FK_AspNetUserRoles_AspNetRoles_RoleId FOREIGN KEY (RoleId) REFERENCES IdentityServerDbV2.dbo.AspNetRoles(Id) ON DELETE CASCADE,
	CONSTRAINT FK_AspNetUserRoles_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES IdentityServerDbV2.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetUserRoles_RoleId ON dbo.AspNetUserRoles (  RoleId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- IdentityServerDbV2.dbo.AspNetUserTokens definition

-- Drop table

-- DROP TABLE IdentityServerDbV2.dbo.AspNetUserTokens GO

CREATE TABLE IdentityServerDbV2.dbo.AspNetUserTokens (
	UserId nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	LoginProvider nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Name nvarchar(450) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	Value nvarchar COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	CONSTRAINT PK_AspNetUserTokens PRIMARY KEY (UserId,LoginProvider,Name),
	CONSTRAINT FK_AspNetUserTokens_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES IdentityServerDbV2.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO;


-- dbo.AllAnswerActivityView source

create view AllAnswerActivityView
as
select a.*,
case
	when aa.Activity is null then 0
	else aa.Activity
end as Activity
from AllAnswersView a
left join AnswerActivities aa on aa.ActivityBy = a.AnsById and aa.AnswerId = a.Id;


-- dbo.AllAnswersView source

CREATE view [dbo].[AllAnswersView]
as
select a.Id,
a.Description,a.AnswerOf,a.AnsweredOn,a.MarkedAsBest,ui.FullName as AnsweredBy,ui.ImageUrl,
case 
	when al.Likes is null then 0
	else al.Likes
end as Likes,
case
	when ad.Dislikes is null then 0
	else ad.Dislikes
end as Dislikes,
a.AnsweredBy as AnsById
from Answers a 
left join UsersInfo ui on ui.Id = a.AnsweredBy
left join AnswersLikes al on a.Id = al.AnswerId
left join AnswersDislikes ad on ad.AnswerId = a.Id;


-- dbo.AnswersCount source

create view AnswersCount
as
select q.Id,
case 
	when ct.AnswersCount is null then 0
	else ct.AnswersCount
end as AnswersCount
from Questions q left join
(select a.AnswerOf as QuestionId,count(*) 
as AnswersCount from Answers a group by a.AnswerOf) as ct on ct.QuestionId = q.Id;


-- dbo.AnswersDislikes source

CREATE view [dbo].[AnswersDislikes]
as
select aa.AnswerId,count(*) as DisLikes from IdentityServerDbV2.dbo.AnswerActivities aa
where aa.Activity = 2
group by aa.AnswerId;


-- dbo.AnswersLikes source

CREATE view [dbo].[AnswersLikes]
as
select aa.AnswerId,count(*) as Likes from AnswerActivities aa
where aa.Activity = 1
group by aa.AnswerId;


-- dbo.CategoryViewModel source

create view CategoryViewModel
as
select c.Id,c.Title,c.Description,tct.TotalTags,tct.WeekTags,tct.MonthTags from Categories c
join TotalCatTags tct on c.Id=tct.Id;


-- dbo.GetCurrentWeekStartingDate source

create view GetCurrentWeekStartingDate
as
SELECT DATEADD(DAY, 2 - DATEPART(WEEKDAY, GETDATE()), CAST(GETDATE() AS DATE)) as Date;


-- dbo.GetQuestionResolves source

create view dbo.GetQuestionResolves
as
SELECT q.Id,
case 
	when Resolved is null then 0
	else Resolved 
end as Resolved 
from Questions q 
left join (SELECT a.AnswerOf ,a.AnsweredBy , 1 as Resolved FROM dbo.Answers a 
where a.MarkedAsBest = 1) as res on q.Id = res.AnswerOf;


-- dbo.GetStartDateofMonth source

CREATE view [dbo].[GetStartDateofMonth]
as
SELECT CAST(DATEADD(DAY,-DAY(GETDATE())+1, CAST(GETDATE() AS DATE)) AS Date) as Date;


-- dbo.MonthsTags source

create view MonthsTags as
select c.Id,
case 
	when tt.TotalTagged is null then 0
	else tt.TotalTagged
end as MonthTags
from Categories c 
left join (select Category,count(*) as TotalTagged from Questions q
where q.AskedOn >= (select* from GetStartDateOfMonth)
group by Category
) as tt on c.Id = tt.Category;


-- dbo.QuestionCardView source

CREATE view [dbo].[QuestionCardView]
as
select q.Id as Id,
vc.Views,
ui.FullName as AskedBy,
ui.Id as AskedById,
q.Title as Title,
q.Description,
ui.ImageUrl,
q.AskedOn,
ac.AnswersCount,
up.UpVotes,
q.Category as CategoryId,
Resolved
from Questions q 
left join QuestionActivities qa on qa.QuestionId=q.Id
join ViewsCount vc on vc.Id=q.Id
join dbo.QuestionUpVotes up on up.Id=q.Id 
join UsersInfo ui on ui.Id = q.AskedBy
join AnswersCount ac on ac.Id = q.Id
join GetQuestionResolves gqr on gqr.Id=q.Id
group by q.Id,vc.Views,q.AskedBy,FullName,ui.Id,q.Title,
q.Description,ui.ImageUrl,ac.AnswersCount,up.UpVotes,q.AskedOn,q.Category,Resolved;


-- dbo.QuestionUpVotes source

create view QuestionUpVotes
as
select q.Id,
case
	when tb.UpVotes is null then 0
	else tb.UpVotes
end as UpVotes
from Questions q left join 
(select qa.QuestionId,count(*) as UpVotes from QuestionActivities qa
where qa.Activity = 3
group by qa.QuestionId) as tb on q.Id=tb.QuestionId;


-- dbo.TotalCatTags source

CREATE view [dbo].[TotalCatTags]
as
select c.Id,
case 
	when tt.TotalTagged is null then 0
	else tt.TotalTagged
end as TotalTags,
wt.WeekTags,
mt.MonthTags
from Categories c 
left join (select Category,count(*) as TotalTagged from Questions q
group by Category) as tt on c.Id = tt.Category
join WeekCatTags wt on wt.Id=c.Id
join MonthsTags mt on mt.Id=c.Id;


-- dbo.TotalUsersQuestions source

create view TotalUsersQuestions
as
select ui.Id,
case 
	when qa.QuestionsAsked is null then 0
	else qa.QuestionsAsked
end as QuestionsAsked
from UsersInfo ui 
left join (select AskedBy,count(*) as QuestionsAsked from Questions
group by AskedBy) as qa on ui.Id=qa.AskedBy;


-- dbo.UserAnsDislikes source

create view UserAnsDislikes
as
select a.AnsweredBy,sum(al.DisLikes) as DisLikes
from Answers a
join AnswersDisLikes al on a.Id=al.AnswerId
group by a.AnsweredBy;


-- dbo.UserCardView source

CREATE view [dbo].[UserCardView]
as
select ui.Id,ui.FullName,ui.Designation,
ui.ImageUrl,ui.Location,ui.Role,ui.Team,
case
	when ual.Likes is null then 0
	else ual.Likes
end as Likes,
case 
	when uad.DisLikes is null then 0
	else uad.DisLikes
end as DisLikes,
QuestionsAsked,
QuestionsAnswered
from UsersInfo ui
left join UsersAnsLikes ual on ui.Id=ual.AnsweredBy
left join UserAnsDislikes uad on ui.Id=uad.AnsweredBy
join TotalUsersQuestions uqa on uqa.Id=ui.Id
join UsersQuestionsAnswered qa on ui.Id=qa.Id;


-- dbo.UsersAnsLikes source

create view UsersAnsLikes
as
select a.AnsweredBy,sum(al.Likes) as Likes
from Answers a
join AnswersLikes al on a.Id=al.AnswerId
group by a.AnsweredBy;


-- dbo.UsersQuestionsAnswered source

create view UsersQuestionsAnswered
as
select ui.Id,
case
	when qa.QuestionsAnswered is null then 0
	else qa.QuestionsAnswered
end as QuestionsAnswered
from UsersInfo ui
left join (select AnsweredBy,count(*) as QuestionsAnswered from Answers
group by AnsweredBy) as qa on ui.Id=qa.AnsweredBy;


-- dbo.ViewsCount source

create view ViewsCount
as
select q.Id,
case 
	when vc.Views is null then 0
	else vc.views
end as Views
from Questions q left join (select qa.QuestionId as Id,
count(qa.Viewed) as Views
from Questions q
left join QuestionActivities qa on q.Id=qa.QuestionId
where qa.Viewed = 1
group by qa.QuestionId) as vc on q.Id=vc.Id;


-- dbo.WeekCatTags source

create view WeekCatTags
as
select c.Id,
case 
	when tt.TotalTagged is null then 0
	else tt.TotalTagged
end as WeekTags
from Categories c 
left join (select Category,count(*) as TotalTagged from Questions q
where q.AskedOn >= (select * from GetCurrentWeekStartingDate)
group by Category
) as tt on c.Id = tt.Category;


