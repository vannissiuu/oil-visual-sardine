---
name: oil-visual-sardine
description: "Create a consistent oil-style visual system in two modes: finished explanatory images with short accurate labels generated directly inside the scene, and transparent character illustrations produced with a bundled background-removal script. Use for concepts, mechanisms, comparisons, workflows, tradeoffs, hero artwork, editorial character scenes, and reusable layout illustrations featuring the fixed 沙丁 character and supporting 小浪花 character."
---

# Oil Visual

Create raster visuals in one shared manga-ink language. Choose one output mode before generating; do not mix the two production paths.

## Choose the output mode

### Mode A — explanatory image

Use when the image must explain a concept, mechanism, workflow, comparison, or tradeoff by itself.

- Deliver a complete PNG or WebP with a finished off-white scene.
- Generate every essential title and label directly inside the bitmap.
- Make the relation visible through objects, paths, states, or repeated materials; labels identify the evidence but do not replace it.
- Do not generate an unlabeled base and add essential words in a separate rendering step.

### Mode B — transparent illustration

Use when the character scene will be composed into a hero, document, card, slide, or other layout.

- Generate the subject on a perfectly uniform chroma-key background that does not occur in the artwork. Default to `#00FF00`; use `#FF00FF` when the subject contains green.
- Do not include explanatory labels unless the user explicitly requests text inside the illustration.
- Remove the background with the bundled `scripts/cutout.py` and deliver a transparent PNG.
- Keep the transparent artwork as a reusable visual asset; the surrounding layout supplies the title and explanatory copy.

If the destination is unclear, choose Mode A when the image itself must communicate the idea and Mode B when another layout will carry the explanation.

## Shared visual language

- For every image containing 「沙丁」 or 「小浪花」, first read and follow [references/character-lock.md](references/character-lock.md). The canonical PNG assets are mandatory identity inputs, not optional inspiration.
- Direction means the character's body heading, not its gaze. Before generating, choose the matching left/right directional canonical and preserve the full topology according to [references/direction-lock.md](references/direction-lock.md); never change direction by turning only the face or moving only the tail.
- Use [references/color-lock.md](references/color-lock.md) as the sole fixed-character color authority. Preserve those identity colors independently from the scene's optional semantic accents.
- Draw confident black manga/comic ink outlines with varied line weight and restrained circular halftone screentone.
- Use one recurring fixed character: 「沙丁」, a small, rounded, slightly streamlined anthropomorphic sardine. It is not a realistic fish, a seafood brand mascot, or a generic cartoon fish.
- Draw 「沙丁」 as a vertical rounded fish/seed-shaped body with a simple friendly face, a slightly asymmetrical streamlined tail fin, and two minimal black line arms and two minimal black line legs for holding props, pointing to relationships, and participating in the scene.
- Keep the fixed face: two small round dot eyes and a short arc smile; do not add complex facial features. Signature details are a small graphite-gray dot-eye combination, low-saturation warm-yellow main body and fins, one small muted sea-mist-blue or sand-colored supporting area, and one slight asymmetrical cut/offset.
- Keep 「沙丁」 clean, approachable, professional, restrained, and memorable. Use black comic ink with varied line weights, circular halftone dots, off-white paper texture, and low-saturation warm yellow; retain all other shared style constraints below.
- Before generating any scene containing 「沙丁」, determine its body heading and load the matching `assets/sadin-facing-left.png` or `assets/sadin-facing-right.png` according to [references/direction-lock.md](references/direction-lock.md). `assets/sadin-character.png` is only a compatibility alias. Never regenerate 「沙丁」 from text alone.
- Keep 「沙丁」 secondary to the subject's evidence or action, especially in Mode A.
- Add a second fixed supporting character: 「小浪花」, a single low, rounded wave silhouette with a crest curling to one side, a foam cap or a few foam beads, and one slight asymmetrical notch.
- Keep 「小浪花」's face to two small round dot eyes and a short arc smile, with minimal black line arms and legs. Continue the black comic ink, circular halftone dots, and restrained low-saturation warm-yellow, off-white, sand-colored, and small sea-mist-blue palette.
- Use 「小浪花」 only as a companion: it may accompany, respond, create visual rhythm, or support/emphasize the focal point, but must not compete with the subject's information or action. 「沙丁」 and 「小浪花」 may collaborate while keeping this hierarchy visible.
- When both characters appear, keep 「沙丁」 visibly larger as the protagonist. The approved composition target is 「小浪花」 at `39.2%` of 「沙丁」's visible height; accept `38–42%` in ordinary same-plane scenes. Treat 「沙丁」 as 100 visible-height units and 「小浪花」 as 39.2 units in the first prompt, on the same ground plane. Keep 50% as an absolute rejection limit. Because 「小浪花」 is naturally wider, keep its total visual weight subordinate.
- Treat the ratio as an acceptance gate, not as a promise that a generative edit can produce exact geometric scaling. Never describe an out-of-range draft as approved.
- Do not spend repeated image-generation calls chasing this ratio. Generate the complete scene once. If ratio alone is wrong, measure the rendered visible-height ratio `r`, compute one correction factor `f = 0.392 / r`, and allow at most one targeted edit that uniformly scales the complete 「小浪花」 by `f` while preserving the scene. Never make a second ratio-only generation call. If that single correction still misses 38–42%, use deterministic scaling/compositing when the character is separable; otherwise stop and report the miss instead of generating again without user approval.
- Do not draw 「小浪花」 as an ordinary wave logo, a seascape, realistic splashing water, a complex ocean illustration, a lighthouse, a buoy, or any other character.
- Before generating any scene containing 「小浪花」, determine its directional topology and load the matching `assets/small-wave-facing-left.png` or `assets/small-wave-facing-right.png` according to [references/direction-lock.md](references/direction-lock.md). `assets/small-wave-character.png` is only a compatibility alias. Never regenerate 「小浪花」 from text alone.
- Use black, white, and halftone gray as the base. Keep the fixed warm-yellow body/fins and supporting accent restrained.
- Add at most two muted semantic colors. Common mapping: blue = input/content, orange = action/warning/cost, purple = process, green = successful result.
- Avoid 3D, glossy gradients, photorealism, wobbly sketch lines, generic card grids, dashboards, decorative clutter, and watermarks.

## Mode A workflow — explanatory image

### 1. Write the visual brief

```text
viewer_question: what should be understood in 10 seconds?
concrete_claim: one-sentence conclusion
real_objects: visible objects, interfaces, documents, tools, or states
relation: comparison, transformation, causality, sequence, hierarchy, feedback, tradeoff, or pipeline
visual_evidence: what must remain understandable when labels are ignored?
scene: believable setting and 2–4 useful environmental cues
semantic_colors: what each accent color means
labels: exact short strings plus the evidence surface for each label
```

Show the input, action or relation, and result. Keep one dominant focal action and no more than three major visual regions. For multiple steps, use a simple left-to-right or top-to-bottom sequence.

When both fixed characters are present, let 「沙丁」 carry or join the main evidence action and let 「小浪花」 accompany, respond, create rhythm, or support/emphasize the focal point. Keep 「小浪花」 secondary so it never becomes a competing information center. In the initial composition, explicitly define 「沙丁」 as 100 visible-height units and 「小浪花」 as 39.2 units on the same ground plane; accept 38–42% and never above 50%. Follow the one-correction limit in Shared visual language rather than repeatedly regenerating the scene.

### 2. Design the labels

- Prefer 2–6 labels. Use more only when the explanation truly needs them.
- Keep each label short and concrete: role, action, state, or outcome.
- Place every label on or immediately beside its evidence surface, such as a desk nameplate, task sheet, folder tab, machine, meter, lane, or result document.
- Use modern Chinese sans-serif typography, medium or bold, large enough to read at the intended display size.
- Do not turn body copy, commands, tables, or long paragraphs into image text. Use a deterministic layout method when dense or editable text is required.

Add this block to the generation prompt:

```text
Text (verbatim): Render these exact labels as part of the bitmap illustration:
"<label 1>", "<label 2>", "<label 3>".
Use each phrase exactly once. Do not translate, paraphrase, misspell, repeat,
or add any other text. Use modern sans-serif medium/bold typography, large
and readable. Place "<label 1>" on <evidence surface>; place "<label 2>" on
<evidence surface>; place "<label 3>" on <evidence surface>.
```

### 3. Build the prompt

Use this order:

1. State the concrete claim and shared task.
2. Describe the real setting, the fixed 「沙丁」 character's action, and—when used—the 「小浪花」 companion's supporting response.
3. Describe the evidence objects and their geometry: aligned, nested, connected, split, transformed, repeated, or converging.
4. Assign semantic colors.
5. Quote the exact labels and specify each placement.
6. Add the Mode A style anchor.
7. End with exclusions.

Add this block whenever a fixed character appears:

```text
Input images: Image 1 is the direction-matched canonical identity reference
for 「沙丁」; Image 2 is the direction-matched canonical identity reference
for 「小浪花」. Use only the
images required by this scene. Preserve each referenced character's exact
silhouette, proportions, face placement, major color-block topology, and
signature structures. Change only pose, limb placement, held objects, slight
tilt, and necessary overlap. A generic sardine or generic wave is incorrect.
```

Mode A style anchor:

```text
Professional editorial manga/comic ink illustration. Clean confident black ink outlines with varied line weights, expressive but controlled. Use classic circular halftone screentone for gray and shadow areas. Include one fixed 「沙丁」 character: a small, rounded, slightly streamlined anthropomorphic sardine with a vertical rounded fish/seed-shaped body, a simple friendly face with two small round dot eyes and a short arc smile, a slightly asymmetrical streamlined tail fin, and minimal black line arms and legs. 「沙丁」 is not a realistic fish, a seafood brand mascot, or a generic cartoon fish. Add the second fixed supporting character 「小浪花」: a single low, rounded wave silhouette with a crest curling to one side, a foam cap or a few foam beads, a slight asymmetrical notch, two small round dot eyes, a short arc smile, and minimal black line arms and legs. Use 「小浪花」 to accompany, respond, create rhythm, or support/emphasize the focal point, never to compete with the subject's information. When both characters appear on the same ground plane, define 「沙丁」 as 100 visible-height units and 「小浪花」 as 39.2 units; accept 38–42% and never above 50%. Keep its total visual weight clearly lower. Continue the same black comic ink and circular halftone dots, with a restrained palette of low-saturation warm yellow, off-white, sand-colored areas, and a small amount of sea-mist blue. Do not draw 「小浪花」 as an ordinary wave logo, seascape, realistic splashing water, complex ocean illustration, lighthouse, buoy, or any other character. Use an off-white lightly textured real environment, not a blank white canvas. Typography is modern sans-serif, medium or bold, large and readable. Color is restrained: black, white, halftone gray, low-saturation warm yellow for 「沙丁」's main body and fins, one small muted sea-mist-blue or sand-colored supporting area, plus at most two muted semantic accent colors. Preserve one slight asymmetrical cut/offset. No 3D, no glossy gradients, no photorealism, no generic card grid, no dashboard, no decorative clutter, no tiny text, no long paragraphs, no watermark.
```

### 4. Inspect and retry

1. Inspect the output at original resolution.
2. Compare every label with the brief character by character. Confirm that each appears exactly once and that no stray text was added.
3. Reject missing, duplicated, invented, or misspelled labels.
4. Regenerate with one targeted correction while repeating all scene and style invariants. Do not conceal an error with a separate text layer.

Separately, compare every rendered fixed character side by side with its canonical PNG using `references/character-lock.md`. Reject a character that is merely the same category, species, or motif instead of the same fixed identity; correct only the drifting character while preserving the original retry rules above.

For a ratio-only failure, this targeted correction is the only additional image-generation call allowed. Measure visible character bounds, compute `f = 0.392 / current_ratio`, and request that exact uniform scale factor once. Do not make further ratio-only generations; use deterministic compositing if available or stop and report the miss.

Use this retry instruction:

```text
Keep the scene, composition, characters, objects, colors, and all correct labels unchanged.
Change only the incorrect text "<wrong>" to the exact text "<right>".
Do not add, remove, translate, or repeat any other text.
```

## Mode B workflow — transparent illustration

### 1. Describe one reusable scene

Use the fixed pair when the scene benefits from collaboration: give 「沙丁」 one clear reusable action, and let 「小浪花」 accompany, respond, create rhythm, or support/emphasize the focal point. Use only the objects needed to establish the action, keep 「小浪花」 secondary, and leave generous padding around the subject so the cutout can be composed safely. When both appear, define 「沙丁」 as 100 visible-height units and 「小浪花」 as 39.2 units on the same baseline; accept 38–42%, never above 50%, and keep its total visual weight clearly lower. The one-correction generation budget applies to Mode B too. Examples: drawing at a desk, inspecting a document, holding a blueprint, or presenting a finished result.

### 2. Build the prompt

Describe the subject first, then append this fixed anchor:

Replace `<KEY_COLOR>` with the selected hex color before sending the prompt.

```text
Style: professional manga/comic ink illustration. Clean confident ink outlines
with varying line weights, thick for contours and thin for details, not wobbly
or sketchy. Heavy use of classic circular halftone screentone dot patterns for
all gray and shadow areas. The single fixed main character is 「沙丁」, a small,
rounded, slightly streamlined anthropomorphic sardine with a vertical rounded
fish/seed-shaped body, a simple friendly face with two small round dot eyes and
a short arc smile, a slightly asymmetrical streamlined tail fin, and minimal
black line arms and legs. 「沙丁」 is not a realistic fish, a seafood brand
mascot, or a generic cartoon fish. Preserve one slight asymmetrical cut/offset.
The second fixed supporting character is 「小浪花」: a single low, rounded wave
silhouette with a crest curling to one side, a foam cap or a few foam beads, a
slight asymmetrical notch, two small round dot eyes, a short arc smile, and
minimal black line arms and legs. Use 「小浪花」 to accompany, respond, create
rhythm, or support/emphasize the focal point, never to compete with the main
subject. When both characters appear, define 「沙丁」 as 100 visible-height
units and 「小浪花」 as 39.2 units on the same baseline; accept 38–42%, with 50% as an absolute
rejection limit. Keep its total visual weight clearly lower. Continue the black comic ink, circular halftone dots, and restrained
low-saturation warm-yellow, off-white, sand-colored, and small sea-mist-blue
palette. Do not draw 「小浪花」 as an ordinary wave logo, seascape, realistic
splashed water, complex ocean illustration, lighthouse, buoy, or any other
character.
Color usage is extremely restrained: 90% black, white, and gray halftone;
low-saturation warm yellow only on 「沙丁」's main body and fins, with one small
muted sea-mist-blue or sand-colored supporting area and sparse semantic accents.
The background must be a perfectly uniform flat <KEY_COLOR> rectangle with zero
gradient, texture, noise, speckles, shadows, floor plane, or lighting variation.
Do not let halftone, ink, props, or the subject touch the image border. Keep
generous padding. No text, no watermark. PNG format.
```

### 3. Validate the source

- Inspect the image before removal.
- Confirm all four corners are uniform and visually match the chosen key color.
- Reject backgrounds with gradients, texture, shadows, speckles, or artwork touching the border.
- Preserve the source image alongside the transparent result until the output is approved.

### 4. Remove the background

Install Pillow if the active Python environment does not have it, then run:

```bash
python3 scripts/cutout.py source.png transparent.png
```

Optional tuning:

```bash
python3 scripts/cutout.py source.png transparent.png \
  --transparent-threshold 12 \
  --opaque-threshold 220
```

The script samples the image border, builds a soft alpha matte from color distance, and removes color spill from antialiased edges. It works with any uniform key color, so the key can be chosen to avoid the subject palette.

### 5. Validate the transparent result

- Confirm the output is RGBA and all four corners have alpha `0`.
- Compare every present fixed character with its canonical PNG and reject silhouette, proportion, face-layout, color-block, fin, crest, foam-bead, or signature-detail drift.
- Confirm the subject remains complete, including 「沙丁」's face, thin line arms and legs, tail fin, asymmetrical detail, and small props.
- Check for a gray fringe at 100% zoom.
- Confirm internal white and halftone areas were not erased.
- Regenerate the source instead of forcing the algorithm when the background is visibly uneven.

## Output handling

- Save approved project assets inside the current project or output directory.
- Do not leave project-referenced images only in the generator's default storage.
- Use versioned filenames instead of overwriting an approved asset unless the user explicitly requests replacement.
- Report the final prompt, output mode, source image path when Mode B is used, final image path, and any non-default cutout options.

## Quality gate

For every output:

- The subject is recognizable in about 3 seconds.
- The main action or relation is clear in about 10 seconds.
- Every present fixed character passes the canonical side-by-side identity checklist; category-level resemblance is not sufficient.
- 「沙丁」 supports the subject instead of becoming generic decoration.
- When present, 「小浪花」 accompanies or emphasizes the focal point without competing with the subject's information.
- When both characters appear, 「小浪花」 is clearly smaller—targeting exactly 39.2% of 「沙丁」's visible height and measuring 38–42% in an ordinary same-plane scene—and its wider silhouette does not make its total visual weight compete with 「沙丁」. Apply the measured one-correction rule for a ratio miss; never loop on ratio-only image generation. Reject any result above the absolute 50% height limit.
- Line work, halftone, warm yellow, and semantic accents remain consistent.

For Mode A:

- One claim, one focal action, and no more than three major visual regions.
- The visual evidence still shows the relation when labels are ignored.
- Every required label is exact, appears once, and is integrated into the correct evidence surface.
- All labels remain readable at the intended display size.

For Mode B:

- Background removal is clean and the output has real transparency.
- Thin details and internal halftone regions remain intact.
- When both fixed characters are present, 「沙丁」 carries the reusable action and 「小浪花」 remains a supporting companion.
- No source background, fringe, shadow, or border artifact remains.
