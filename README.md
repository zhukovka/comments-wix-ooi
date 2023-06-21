# comments-wix-ooi

kukuruku
## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| isMobile | bool | true | - | If the app is open in mobile |
| token | string | - | - | Context token received from the hosting app |
| [settings](#Settings) | array | [] | - | Configuration of the app Settings. See table below |
| [style](#Style) | array | [] | - | Configuration of the app Style. See table below |
| commentId | string | - | - | An comment id pass to the app |
| replyId | string | - | - | An reply id pass to the app |
| memberAuth | func | - | - | A callback method to be called to check if user is loged-in and in community. if he does loged-in, it cal to the callback with the args. Signature: `memberAuth(args, cb)` |
| [currentMember](#Member) | array | - | - | The currnet user. See table below |

### Settings

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| entityPageUrl | string | - | true | URL of the page to share |
| appId | string | - | true | App definition Id |
| instanceId | string | - | true | Instance Id |
| compId | string | - | true | Component Id |
| textColor | string | '#5' | - | Text color |
| actionColor | string | '#8' | - | Action color |
| mentionColor | string | '#9' | - | Mention color |
| backgroundColor | string | '#1' | - | Background color |
| fontStyle | string | 'Paragraph 2' | - | Font style |
| bodyFontSize | string | '16' | - | Size of Comment and Reply body text |
| desktopCornerRadius | string | '0' | - | Corner Radius in Desktop |

### Style

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| - | - | - | - | - |

### Member

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| id | string | - | - | The member id  |
| name | string | - | - | The member name  |
| avatar | string | - | - | The member avatar url  |
| isAdmin | bool | false | - | If the member is admin |
