---
title: "如何使用超级好用的终端文件管理器Yazi"
imgUrl: "/post-images/yazi.jpg"
publishedAt: "2024-12-30"
summary: "设置并使用yazi terminal file manager"
---

## 安装

我使用的是 macOS，所以通过 Homebrew 安装了 yazi 和所有可选依赖项。

关于你的系统所需的命令，可以查看[安装说明](https://yazi-rs.github.io/docs/installation)

```bash
brew install yazi ffmpegthumbnailer ffmpeg sevenzip jq poppler fd ripgrep fzf zoxide imagemagick font-symbols-only-nerd-font
```

## 退出 Yazi 时移动到当前工作目录（CWD）

这个 shell 包装器很有用，它可以在退出 Yazi 时自动进入你所在的目录。

如果你和我一样使用 `zsh`，可以用你喜欢的编辑器打开 `~/.zshrc` 文件，并在文件底部添加以下内容：

```bash
function y() {
 local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
 yazi "$@" --cwd-file="$tmp"
 if cwd="$(command cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
  builtin cd -- "$cwd"
 fi
 rm -f -- "$tmp"
}
```

然后通过运行以下命令使 zshrc 文件生效：

```bash
source ~/.zshrc
```

现在你可以用 y 来打开 Yazi 了！

上面的代码适用于 bash 或 zsh，但你也可以在其他 shell 中设置它。请查看此处的[文档](https://yazi-rs.github.io/docs/quick-start#shell-wrapper)

## 设置默认配置

Yazi 有三个配置文件：

1. [yazi.toml](https://yazi-rs.github.io/docs/configuration/yazi) - 通用配置。
2. [keymap.toml](https://yazi-rs.github.io/docs/configuration/keymap) - 按键绑定配置。
3. [theme.toml](https://yazi-rs.github.io/docs/configuration/theme) - 配色方案配置。

这些文件都需要放在 `~/.config/yazi` 目录下。

让我们来创建它们吧！

### 首先创建 Yazi 配置目录

```bash
mkdir -p ~/.config/yazi/

```

在 Windows 系统中，配置目录应位于：
`C:\Users\USERNAME\AppData\Roaming\yazi\config\`

### 接着进入配置目录

```bash
cd ~/.config/yazi/
```

### 最后创建三个配置文件

```bash
touch yazi.toml keymap.toml theme.toml
```

然后将默认的 yazi.toml 和 keymap.toml 配置文件复制并粘贴到我们刚创建的对应文件中。

现在，你可以根据自己的喜好修改这些默认配置了。

### 修改默认编辑器

要修改用于打开代码/文本文件或目录的默认编辑器，可以更改 `EDITOR` 环境变量。

例如，在 zsh 中，用你喜欢的编辑器打开 zshrc 文件，并在文件底部添加以下内容：

```bash
export EDITOR=nvim
```

将 nvim 替换为你想使用的编辑器的命令。

## 安装主题风格 (Flavor)

确保你当前位于 Yazi 配置目录：

```bash
cd ~/.config/yazi
```

创建一个 flavors 目录：

```bash
mkdir flavors
```

然后可以前往 [这里](https://github.com/yazi-rs/flavors) 找到你喜欢的主题风格。

找到一个主题后，按照 README.md 中的说明运行命令，通过 Yazi 的插件和主题管理器 ya pack 安装它。

例如，可以使用以下命令安装 [catppuccin-mocha](https://github.com/yazi-rs/flavors/tree/main/catppuccin-mocha.yazi) 风格：

```bash
ya pack -a yazi-rs/flavors:catppuccin-mocha
```

安装完成后，可以用你喜欢的编辑器打开我们之前创建的 theme.toml 文件。我使用 Neovim，因此运行：

```bash
nvim ~/.config/yazi/theme.toml
```

然后在文件中添加以下内容以使用该主题风格：

```bash
[flavor]
dark = "catppuccin-mocha"
light = "catppuccin-mocha"
```

将 catppuccin-mocha 替换为你选择的主题名称。

## 按键绑定 (Keymaps)

探索所有可用按键绑定的最佳方法之一是查看 默认的 [keymap.toml](https://github.com/sxyazi/yazi/blob/shipped/yazi-config/preset/keymap-default.toml) 文件。

你也可以通过按下 ~ 或 F1 来查看可用的按键绑定。

如果想修改这些按键绑定，可以直接对我们之前复制到 keymap.toml 文件中的默认配置进行更改。

## 就这样！🚀
