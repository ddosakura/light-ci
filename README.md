# light-ci

轻量级持续集成

## 部署

```bash
light-ci
```

### 环境变量

+ PORT
+ TOKEN

## 自动化流程

1. 脚本编写
2. 仓库注册
3. 事件过滤
4. 关联脚本
5. 仓库 Webhook 配置
6. 流程自动化

## webhook 支持

+ [ ] github
    + commit_comment
    + create
    + delete
    + deployment_status
    + deployment
    + fork
    + gollum
    + issue_comment
    + issues
    + member
    + membership
    + page_build
    + public
    + pull_request_review_comment
    + pull_request
    + push
    + release
    + repository
    + status
    + team_add
    + watchAny
+ [ ] gitee
+ [ ] coding
+ [ ] 工蜂
+ [ ] gitlab
