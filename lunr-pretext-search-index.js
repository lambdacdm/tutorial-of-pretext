var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-1-2",
  "level": "1",
  "url": "root-1-1-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   知乎 寨森CDM    "
},
{
  "id": "section_prepare",
  "level": "1",
  "url": "section_prepare.html",
  "type": "Section",
  "number": "1.1",
  "title": "准备工作",
  "body": " 准备工作  本教程是关于使用PreTeXt写数学电子书的教程。 事实上已有 官方教程 。 但教程太长，并且是英文版。而网上难以搜索到关于PreTeXt的任何中文版资源。 这里提供一个简短的中文版教程，帮助大家快速上手PreTeXt。  本文档适用于Windows系统。在开始之前，请确保你已具有如下东西：   VS Code  Python （版本在3.8.5或以上）  latex  Git  GitHub账号    其中Git与GitHub账号是为了把电子书发布到网站用的。 如果你只想保存到本地而不想发布到网络上，则不需要这两个东西。     本文档最后更新于2024年7月1日。  "
},
{
  "id": "section_startpretext",
  "level": "1",
  "url": "section_startpretext.html",
  "type": "Section",
  "number": "1.2",
  "title": "第一个PreTeXt项目",
  "body": " 第一个PreTeXt项目   安装PreTeXt及其扩展  首先我们需要安装PreText。安装之前确保Python版本在3.8.5或以上。打开终端，输入：   pip install pretext   如果上述指令不成功，则输入：   python -m pip install pretext   为了验证是否安装成功，请输入：   pretext --version   （或者是 python -m pretext --version ）。 如果返回的是一个数字（意思是版本号），则安装成功。   2024年7月1日，PreTeXt的最新版本是2.4.1   然后，我们需要在VS Code里安装名为 PreTeXt-tools 的扩展。 安装结束后重启VS Code。    创建一个示例项目  我们先通过一个示例项目来熟悉PreTeXt的基础操作。 首先，选定一个文件夹（假定它的位置是 D:\/test ），我们想把项目放在这个文件夹里。 打开终端，进入文件夹。方法是在终端输入：   cd D:\/test   然后在该文件夹下创建示例项目。方法是在终端输入：   pretext new book   这时候你就会发现， D:\/test 文件夹下就有一个名为 new-pretext-project 的子文件夹。 这个 new-pretext-project 文件夹下有如下东西：   new-pretext-project文件夹结构图    在上图中， source 文件夹中储存着源代码。而 project.ptx 则是控制整个项目的总文件，如果缺失该文件则后续无法生成网页。    生成网页文件并浏览  现在， 在VS Code里 打开文件夹 D:\/test\/new-pretext-project 。 如果之前你已经正确安装了名为 PreTeXt-tools 的扩展，则左下角会有一个PreTeXt的标识，如下图红圈所示。   PreTeXt标识图    点击上图红圈处的PreTeXt标识。则VS Code正上方搜索框处会弹出一个列表。 点击列表中的第一项 Build web 。 此时PreTeXt就开始编译源代码并生成网页文件。 等该过程完成后，右下角会弹出一个窗口，如下图所示。   如果 new-pretext-project 文件夹下缺失 project.ptx 文件， 则VS Code正上方搜索框弹出的列表中没有 Build web 这一项。 此时需要在终端输入 pretext init 命令来初始化项目。 初始化的过程中就会自动建立 project.ptx 及其他必须文件。 这之后点击左下方PreTeXt标识后VS Code正上方搜索框弹出的列表里就有 Build web 这一项了。    生成网页成功提示窗口    此时点击上图框中的 View output ，随后浏览器就会立即启动，并自动打开生成的网页，如下图所示。   生成的网页      在output文件夹中浏览网页  现在如果回过头来看 D:\/test\/new-pretext-project 的文件夹结构，你会发现此时多了许多东西，如下图所示：   new-pretext-project文件夹的变化    上图的 output 文件夹就包含生成的网页。 具体而言，生成的索引网页位置就在 output\/web\/index.html ，如下图所示。   output\/web文件夹一览     "
},
{
  "id": "fig-hello",
  "level": "2",
  "url": "section_startpretext.html#fig-hello",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " new-pretext-project文件夹结构图   "
},
{
  "id": "section_startpretext-4-2",
  "level": "2",
  "url": "section_startpretext.html#section_startpretext-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "在VS Code里 "
},
{
  "id": "fig-pretext-sign",
  "level": "2",
  "url": "section_startpretext.html#fig-pretext-sign",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " PreTeXt标识图   "
},
{
  "id": "fig-view-output",
  "level": "2",
  "url": "section_startpretext.html#fig-view-output",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " 生成网页成功提示窗口   "
},
{
  "id": "fig-output-webpage",
  "level": "2",
  "url": "section_startpretext.html#fig-output-webpage",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " 生成的网页   "
},
{
  "id": "fig-folder-now",
  "level": "2",
  "url": "section_startpretext.html#fig-folder-now",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " new-pretext-project文件夹的变化   "
},
{
  "id": "fig-web-location",
  "level": "2",
  "url": "section_startpretext.html#fig-web-location",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " output\/web文件夹一览   "
},
{
  "id": "section_upload",
  "level": "1",
  "url": "section_upload.html",
  "type": "Section",
  "number": "1.3",
  "title": "上传到网站",
  "body": " 上传到网站   之前我们创建并编辑了一个项目，但它此时只存在于本地中。 现在我们将它上传到网站上。这里我们用GitHub托管网站。 下面的流程就是常见的git push。如果你对此十分熟悉，可以忽略本文。  进行下面的内容之前，先进入 GitHub网页 并登录账号。    为github账号配置SSH key  如果你已经配置好SSH key，请跳过这一步。  我们需要先在Git上绑定GitHub账号。打开Git Bash。 在弹出的命令行窗口里面一行一行地运行如下代码（其中双引号里的内容自行替换）：   git config --global user.name \"你的github账户名\" git config --global user.email \"你github注册时的邮箱\"   下面来生成SSH key。继续在窗口运行如下代码（其中双引号里的内容自行替换）：   ssh-keygen -t rsa -C \"你GitHub注册时的邮箱\"   之后它会让你输入一些东西。这里我们什么都不输入，一路回车，之后如下图所示（你应该需要按三次回车）：   SSH key配置指令    进入链接 。 点击下图红圈处的New SSH key按钮。   GitHub上新建SSH key    然后用资源管理器打开本地目录 C:\/用户\/(你的电脑用户名)\/.ssh ， 用编辑器（如VS Code）打开其下的 id_rsa.pub 文件，复制里面的内容（应以 ssh-rsa 开头）。 把这段内容粘贴到下图所示位置（其中Title名称自己定）：   把SSH key内容复制粘贴到GitHub指定位置    点击绿色按钮Add SSH key，这样SSH key就配置好了。然后关掉Git Bash窗口。    GitHub上创建新仓库并部署GitHub Pages  进入链接 用以创建新仓库。 在Repository name下的框中给仓库命名，例如下图中将其命名为test。 如果你没有GitHub会员，请勾选Public（因为Private下部署GitHub Pages是需要会员的）。 勾选Add a README file。   创建新仓库    上面步骤操作完成后点击Create repository按钮创建仓库。  接下来我们部署GitHub Pages。如下图所示。 第一步点击上面一栏中的Settings。 第二步点击左侧一栏中的Pages。 然后确保下图蓝框处是Deploy from a branch（如果不是，请手动选择这个）。 第三步点击None处的按钮。 第四步选择main。第五步点击Save保存。   部署GitHub Pages      将本地网页通过Git上传到Github上  在GitHub仓库中的Code下，点击Code绿色按钮，然后点击SSH，复制下图红圈处的链接 git@****.git （也即，按照下图的四步走）。   Clone仓库地址    用电脑的资源管理器打开 new-pretext-project 下的 output 下的 web 文件夹。  先在该文件夹下新建一个名为 .nojekyll 的空文件。   新建一个 .nojekyll 的文件的目的在于，GitHub部署网站时会使用jekyll，从而忽略带有下划线名称的文件夹。 但PreTeXt生成的 web 文件夹下的 _static 文件夹里含有css文件。 这样的话，GitHub部署网站渲染网页时就无法加载css文件。 此时加入一个 .nojekyll 文件就会使得GitHub无法使用jekyll，从而可以加载 _static 文件夹里的内容。   此时在 web 文件夹空白处右键，选Git Bash Here。在弹出的命令行窗口 一行一行地 运行：   git init git remote add origin git@****.git   这样就初始化了本地Git任务并连接到了Github仓库。 下面再 一行一行地 运行（其中双引号里的内容自行替换）：   Git上传到GitHub的指令   git pull origin main git checkout main git add . git commit -m \"这里你自己写注释\" git push    其中第一行 git pull origin main 运行后部分人可能会遇到如下提示：   安全性验证    输入 yes 即可。此后便不会再遇到这种情况了。  上述步骤完成后，等待十几秒，再回到GitHub的仓库中，你会发现此时仓库页面变成如下图所示：   此时的仓库页面    需要确保上图红圈处是绿色对勾。 如果上图红圈处不是绿色对勾，则等待一段时间后刷新网页就会变成绿色对勾。 之后点击下图红圈处github-pages。   点击github-pages    弹出的页面中便会显示出网址链接，如下图红圈所示。   网址链接    点击上图红圈网址链接，你就能看到你所部署的网页了，如下图所示。它和你之前在本地生成的网页完全一致。   由GitHub托管的网站    把该网址链接记住。这就是你这个项目的网站地址。到此为止就成功将本地的PreText项目上传到网站了。    后续再次上传  如果你之后编辑了本地的PreText项目想要再次上传（相当于更新网站内容）， 只需在 hello\/output\/html 文件夹中Git Bash 里的命令即可。   "
},
{
  "id": "fig-sshkeyignore",
  "level": "2",
  "url": "section_upload.html#fig-sshkeyignore",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " SSH key配置指令   "
},
{
  "id": "fig-newsshkey",
  "level": "2",
  "url": "section_upload.html#fig-newsshkey",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " GitHub上新建SSH key   "
},
{
  "id": "fig-pastesshkey",
  "level": "2",
  "url": "section_upload.html#fig-pastesshkey",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " 把SSH key内容复制粘贴到GitHub指定位置   "
},
{
  "id": "fig-repositoryname",
  "level": "2",
  "url": "section_upload.html#fig-repositoryname",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " 创建新仓库   "
},
{
  "id": "fig-depoly-pages",
  "level": "2",
  "url": "section_upload.html#fig-depoly-pages",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": " 部署GitHub Pages   "
},
{
  "id": "fig-clonessh",
  "level": "2",
  "url": "section_upload.html#fig-clonessh",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " Clone仓库地址   "
},
{
  "id": "section_upload-5-7",
  "level": "2",
  "url": "section_upload.html#section_upload-5-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "一行一行地 "
},
{
  "id": "section_upload-5-9",
  "level": "2",
  "url": "section_upload.html#section_upload-5-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "一行一行地 "
},
{
  "id": "gittogithub",
  "level": "2",
  "url": "section_upload.html#gittogithub",
  "type": "Listing",
  "number": "1.3.7",
  "title": "",
  "body": " Git上传到GitHub的指令   git pull origin main git checkout main git add . git commit -m \"这里你自己写注释\" git push   "
},
{
  "id": "fig-verifysshkey",
  "level": "2",
  "url": "section_upload.html#fig-verifysshkey",
  "type": "Figure",
  "number": "1.3.8",
  "title": "",
  "body": " 安全性验证   "
},
{
  "id": "fig-nowrepository",
  "level": "2",
  "url": "section_upload.html#fig-nowrepository",
  "type": "Figure",
  "number": "1.3.9",
  "title": "",
  "body": " 此时的仓库页面   "
},
{
  "id": "fig-githubpages",
  "level": "2",
  "url": "section_upload.html#fig-githubpages",
  "type": "Figure",
  "number": "1.3.10",
  "title": "",
  "body": " 点击github-pages   "
},
{
  "id": "fig-page-site",
  "level": "2",
  "url": "section_upload.html#fig-page-site",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": " 网址链接   "
},
{
  "id": "fig-githubpage",
  "level": "2",
  "url": "section_upload.html#fig-githubpage",
  "type": "Figure",
  "number": "1.3.12",
  "title": "",
  "body": " 由GitHub托管的网站   "
},
{
  "id": "chapter_syntax",
  "level": "1",
  "url": "chapter_syntax.html",
  "type": "Chapter",
  "number": "2",
  "title": "语法",
  "body": " 语法  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
