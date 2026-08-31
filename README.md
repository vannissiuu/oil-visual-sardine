# oil-visual-sardine

`oil-visual-sardine` 是本机全局 Codex Skill，用统一的漫画墨线、圆形半调和低饱和暖黄色视觉语言生成内容配图。它保留上游 `oil-visual` 的 Mode A / Mode B、文字、输出、抠图与质量检查流程，只把固定角色替换为主角「沙丁」和配角「小浪花」。

> 当前状态：从上游 [`oil-oil/oil-visual`](https://github.com/oil-oil/oil-visual) 衍生的独立版本，发布于 [`vannissiuu/oil-visual-sardine`](https://github.com/vannissiuu/oil-visual-sardine)。上游仓库仅代表原始 `oil-visual`，不能作为本 Skill 的安装来源。

## 固定角色

| 角色 | 定位 | 左向 canonical | 右向 canonical |
| --- | --- | --- | --- |
| 沙丁 | 主角，承担主要行动 | [`sadin-facing-left.png`](./assets/sadin-facing-left.png) | [`sadin-facing-right.png`](./assets/sadin-facing-right.png) |
| 小浪花 | 配角，陪伴、回应或托住重点 | [`small-wave-facing-left.png`](./assets/small-wave-facing-left.png) | [`small-wave-facing-right.png`](./assets/small-wave-facing-right.png) |

方向按身体整体朝向判断，不按视线判断。沙丁尾部必须位于前进方向反侧；小浪花的卷头、泡沫、内腔和缺口必须同步变换。任何含角色的生成都必须先查看并加载对应 canonical，不能只凭文字重画。

两者同框时，以沙丁可见高度为 `100`，小浪花目标为 `39.2`；普通同平面场景验收区间为 `38–42%`，绝对不得超过 `50%`。这是交付验收标准，不是对生成器的精确控制承诺。比例不合格最多追加一次定向修正；仍不合格时只可确定性缩放／合成，或停止并如实报告，禁止继续生成多张图追比例。

核心色号与纹理容差见 [`references/color-lock.md`](./references/color-lock.md)，完整身份与比例规则见 [`references/character-lock.md`](./references/character-lock.md)，方向与拓扑规则见 [`references/direction-lock.md`](./references/direction-lock.md)。

## 输出模式

- Mode A：完成的解释型场景图；必要短标签直接生成在画面中。
- Mode B：先生成统一键色背景，再用未改动的 [`scripts/cutout.py`](./scripts/cutout.py) 输出透明 PNG。

两种模式的完整提示词结构、文字约束、输出处理和质量门禁以 [`SKILL.md`](./SKILL.md) 为唯一流程入口。

## 本机使用

Skill 已位于 `~/.codex/skills/oil-visual-sardine`。重启 Codex 后可直接点名：

```text
$oil-visual-sardine
请用 Mode A 生成一张 4:3 横向内容配图。
主题：……
```

```text
$oil-visual-sardine
请用 Mode B 生成一张透明背景 PNG。
让沙丁……，小浪花……。
```

完整提示词结构和交付检查见 [`SKILL.md`](./SKILL.md)。

## License

[MIT](./LICENSE)
