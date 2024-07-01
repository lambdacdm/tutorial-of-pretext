var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-1-2",
  "level": "1",
  "url": "root-1-1-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   知乎 寨森Lambda-CDM    "
},
{
  "id": "section_prepare",
  "level": "1",
  "url": "section_prepare.html",
  "type": "Section",
  "number": "1.1",
  "title": "准备工作",
  "body": " 准备工作  本教程是关于使用PreText写数学电子书的教程。 事实上已有 官方教程 。 但教程太长，并且是英文版。而网上难以搜索到关于PreText的任何中文版资源。 这里提供一个简短的中文版教程，帮助大家快速上手PreText。  在开始之前，请确保你已具有如下东西：   一款编辑器（如vscode）  python （版本在3.8.5以上）  latex  git  github账号    其中后两个git与github账号是为了把电子书发布到网站用的。 如果你只想保存到本地而不想发布到网络上，则不需要这两个东西。     "
},
{
  "id": "section_startpretext",
  "level": "1",
  "url": "section_startpretext.html",
  "type": "Section",
  "number": "1.2",
  "title": "第一个PreText项目",
  "body": " 第一个PreText项目   安装PreText  首先我们需要安装PreText。安装之前确保python版本在3.8.5之上。打开终端，输入：   pip install pretext   如果上述指令不成功，则输入：   python -m pip install pretext   为了验证是否安装成功，请输入：   pretext --version   （或者是 python -m pretext --version ）。 如果返回的是一个数字（意思是版本号），则安装成功。    创建一个示例项目  我们先通过一个示例项目来熟悉PreText的基础操作。 首先，选定一个文件夹（假定它的位置是 D:\/A ），我们想把项目放在这个文件夹里。 打开终端，进入文件夹。方法是在终端输入：   cd D:\/A   然后在该文件夹下创建示例项目。方法是在终端输入：   pretext new hello   这时候你就会发现， D:\/A 文件夹下就有一个名为 hello 的子文件夹。 这个 hello 文件夹下有如下东西：   hello文件夹结构图    其中， source 是储存源代码文件的， output 是储存输出的网页等文件的。 我们可以看看这个项目输出的网页长什么样。 打开 output 文件夹下的 html 文件夹下的 index.html ，就会看到网页长这个样：   hello项目的网页文件      编辑源代码  现在让我们编辑源代码。假设我们想添加扉页以及标注自己的名字。 打开vscode，并 在vscode里 打开 hello 文件夹。 你会发现，其下的 source 文件夹里有且只有一个 main.ptx 文件。 这个文件就是源代码文件。 打开它，并在第8行 <title>hello<\/title> 与 第9行 <chapter xml:id=\"my-first-chapter\"> 之间插入如下字符：   补充的代码   <frontmatter> <titlepage> <author> <personname>（你的名字）<\/personname> <\/author> <\/titlepage> <\/frontmatter>      生成网页文件并浏览  我们先生成网页文件。在vscode里的终端输入   pretext build html   如下图所示：   生成网页文件的指令    现在我们浏览生成的网页。 一种方法是像之前一样，回到 output 文件夹，找到其下的 html 文件夹里的 index.html 。 另一种方法是在vscode里的终端输入：   pretext view   回车后如下图所示：   浏览网页的指令    按住 Ctrl 键同时点击红圈处的链接，即可访问网页。现在编辑后的网页长这个样：   此时网页的界面      生成Latex文件并浏览  一些人可能更喜欢Latex文件这种输出形式。生成Latex文件的指令是   pretext build latex   浏览生成的Latex文件的方法是打开 hello\/output\/latex 文件夹里的 main.tex 。 另一种方法仍然是在终端里运行   pretext view   打开链接后选择latex即可。   "
},
{
  "id": "fig-hello",
  "level": "2",
  "url": "section_startpretext.html#fig-hello",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " hello文件夹结构图   "
},
{
  "id": "fig-helloindex",
  "level": "2",
  "url": "section_startpretext.html#fig-helloindex",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " hello项目的网页文件   "
},
{
  "id": "section_startpretext-4-2",
  "level": "2",
  "url": "section_startpretext.html#section_startpretext-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "在vscode里 "
},
{
  "id": "fig-build",
  "level": "2",
  "url": "section_startpretext.html#fig-build",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " 生成网页文件的指令   "
},
{
  "id": "fig-view",
  "level": "2",
  "url": "section_startpretext.html#fig-view",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " 浏览网页的指令   "
},
{
  "id": "fig-nowhtml",
  "level": "2",
  "url": "section_startpretext.html#fig-nowhtml",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " 此时网页的界面   "
},
{
  "id": "section_upload",
  "level": "1",
  "url": "section_upload.html",
  "type": "Section",
  "number": "1.3",
  "title": "上传到网站",
  "body": " 上传到网站   之前我们创建并编辑了一个项目，但它此时只存在于本地中。 现在我们将它上传到网站上。这里我们用github托管网站。 下面的流程就是常见的git push。如果你对此十分熟悉，可以忽略本文。  进行下面的内容之前，先进入 github网页 并登录账号。    为github账号配置SSH key  如果你已经配置好SSH key，请跳过这一步。  我们需要先在git上绑定github账号。打开Git Bash。 在弹出的命令行窗口里面一行一行地运行如下代码（其中双引号里的内容自行替换）：   git config --global user.name \"你的github账户名\" git config --global user.email \"你github注册时的邮箱\"   下面来生成SSH key。继续在窗口运行如下代码（其中双引号里的内容自行替换）：   ssh-keygen -t rsa -C \"你github注册时的邮箱\"   之后它会让你输入一些东西。这里我们什么都不输入，一路回车，之后如下图所示（你应该需要按三次回车）：   SSH key配置指令    进入链接 。 点击下图红圈处的New SSH key按钮。   github上新建SSH key    然后用资源管理器打开本地目录 C:\/用户\/(你的电脑用户名)\/.ssh ， 用编辑器（如vscode）打开其下的 id_rsa.pub 文件，复制里面的内容（应以 ssh-rsa 开头）。 把这段内容粘贴到下图所示位置（其中Title名称自己定）：   把SSH key内容复制粘贴到github指定位置    点击绿色按钮Add SSH key，这样SSH key就配置好了。然后关掉Git Bash窗口。    github上创建新仓库  进入链接 用以创建新仓库。 在Repository name下的框中给仓库命名。 注意，必须这样命名 ***.github.io ，其中***是你的github账号名，如下图所示 （这样能保证创建仓库的同时生成网站）：   为仓库正确命名    其他选项根据自己需要确定。然后点击Create repository按钮创建仓库。 如果下图中红圈位置是绿色对勾，则说明仓库创建的同时网站也生成成功。 如果不是绿色对勾，请等待一段时间，然后刷新页面。   确认网站生成成功    如果你不满意这个仓库名，此时再去到Settings里更改。 比如，我们现在把仓库名更改为 hello ，如下图所示。   更改仓库名称      将本地网页通过git上传到github上  在github仓库中的Code下，点击Code绿色按钮，然后点击SSH，复制下图红圈处的链接 git@****.git 。   Clone仓库地址    用电脑的资源管理器打开 hello 下的 output 下的 html 文件夹。 右键，选Git Bash Here。在弹出的命令行窗口一行一行运行：   git init git remote add origin git@****.git   这样就初始化了本地git任务并连接到了github仓库。下面再一行一行地运行（其中双引号里的内容自行替换）：   git上传到github的指令   git pull origin main git checkout main git add . git commit -m \"这里你自己写注释\" git push    其中第一行 git pull origin main 运行后部分人可能会遇到如下提示：   安全性验证   输入 yes 即可。此后便不会再遇到这种情况了。 现在回到github的仓库中，你会发现此时仓库页面变成如下图所示：   此时的仓库页面     你仓库里的文件可能与图中的文件有所差别，取决于你之前创建仓库时对License与Readme的设置。   如果上图蓝圈处不是绿色的对勾，则等待一段时间后刷新网页就会变成绿色对勾。 之后点击上图红圈处github-pages，弹出的页面点击View deployment，就会打开你已经上传好的Pretext网页了，如下图所示。   由github托管的网站    把网址链接记住。这就是你这个项目的网站地址。到此为止就成功将本地的PreText项目上传到网站了。    后续再次上传  如果你之后编辑了本地的PreText项目想要再次上传（相当于更新网站内容）， 只需在 hello\/output\/html 文件夹中Git Bash 里的命令即可。   "
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
  "body": " github上新建SSH key   "
},
{
  "id": "fig-pastesshkey",
  "level": "2",
  "url": "section_upload.html#fig-pastesshkey",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " 把SSH key内容复制粘贴到github指定位置   "
},
{
  "id": "fig-repositoryname",
  "level": "2",
  "url": "section_upload.html#fig-repositoryname",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " 为仓库正确命名   "
},
{
  "id": "fig-guaranteepage",
  "level": "2",
  "url": "section_upload.html#fig-guaranteepage",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": " 确认网站生成成功   "
},
{
  "id": "fig-changerepositoryname",
  "level": "2",
  "url": "section_upload.html#fig-changerepositoryname",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " 更改仓库名称   "
},
{
  "id": "fig-clonessh",
  "level": "2",
  "url": "section_upload.html#fig-clonessh",
  "type": "Figure",
  "number": "1.3.7",
  "title": "",
  "body": " Clone仓库地址   "
},
{
  "id": "gittogithub",
  "level": "2",
  "url": "section_upload.html#gittogithub",
  "type": "Listing",
  "number": "1.3.8",
  "title": "",
  "body": " git上传到github的指令   git pull origin main git checkout main git add . git commit -m \"这里你自己写注释\" git push   "
},
{
  "id": "fig-verifysshkey",
  "level": "2",
  "url": "section_upload.html#fig-verifysshkey",
  "type": "Figure",
  "number": "1.3.9",
  "title": "",
  "body": " 安全性验证   "
},
{
  "id": "fig-nowrepository",
  "level": "2",
  "url": "section_upload.html#fig-nowrepository",
  "type": "Figure",
  "number": "1.3.10",
  "title": "",
  "body": " 此时的仓库页面   "
},
{
  "id": "fig-githubpage",
  "level": "2",
  "url": "section_upload.html#fig-githubpage",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": " 由github托管的网站   "
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
