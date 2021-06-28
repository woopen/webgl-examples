# 矢量

矢量在平时使用中其实就是一个普通的数组，如 $[X, Y, Z]$ 。矢量在表示时，会在上方加一个箭头，如矢量 $\overrightarrow{A}$ ，下面为了简单就不加箭头了。

矢量只有方向和大小，没有位置。如下图中，矢量 A 可以表示为 $[1, 1]$ ，它和矢量 B 是同一个矢量，因为矢量没有位置，所以可以随便的移动它，最终还是表示同一个矢量。矢量的箭头那一端称为终点，另一端称为起点。

![](https://user-images.githubusercontent.com/25923128/120911498-8b680980-c6ba-11eb-825e-3c2f48578f93.png)

## 零矢量

零矢量每个位置都是 `0` ，如三维零矢量可以表示为 $[0, 0, 0]$，零矢量没有大小、没有方向当然它也没有位置。任何矢量加上零矢量都等于它本身。

## 矢量加减法

矢量的加减法就和标量的加减法一样，就是把矢量的对应项加或减起来。矢量只能和同维度的矢量相加或相减。

```js
[x1, y1, z1] + [x2, y2, z2] = [x1 + x2, y1 + y2, z1 + z2]

[x1, y1, z1] - [x2, y2, z2] = [x1 - x2, y1 - y2, z1 - z2]
```

矢量加法是可交换的 $A + B = B + A$，矢量减法可反交换 $A - B = -(B - A)$。

在几何中，矢量的加减法如下图所示。

![](https://user-images.githubusercontent.com/25923128/120915828-887c1180-c6d8-11eb-9743-31aceb57d616.png)

$A + B$ 是把一个点先应用 A ，然后应用 B ，然后 $A + B$ 就等于从 A 的尾部到 B 的头部的矢量。 $A - B$ 也是一样，先应用 A，再应用 -B （也就是将 B 的方向反转下）。需要注意的是 $A - B$ 与 $B - A$ 是两个方向相反的矢量。 

## 标量和矢量乘法

标量和矢量乘法也非常简单，直接用标量乘上矢量中各个项就行了。

```js
k * [x, y, z] = [kx, ky, kz]
```

如果 `k` 为 `-1` 时，会得到矢量的负矢量（方向相反，大小相等）。

在几何中，标量乘矢量，标量就是矢量长度的缩放因子，如 `k` 等于 `2`，那么所得矢量是原矢量两倍长。

## 矢量大小

矢量的大小用双垂直线表示，比如矢量 $A$ 的大小表示为 $\| A \|$ 。要计算矢量大小也非常简单，只要运用勾股定理就行了。

$$
\| A \| = \| [x, y] \| = \sqrt{x^2+y^2}
$$
$$
\| B \| = \| [x, y, z] \| = \sqrt{x^2+y^2+z^2}
$$

![](https://user-images.githubusercontent.com/25923128/120923449-2f74a380-c701-11eb-803a-b497aa015c60.png)

## 单位矢量

单位矢量是大小为 `1` 的矢量，单位矢量也称为归一化矢量或法线，称为法线时一般表示该矢量垂直与一个表面。

要归一化一个矢量，只需要将矢量除以它的大小就行了。

$$
len = \| [x,y,z] \| = \sqrt{x^2+y^2+z^2}
$$
$$
norm = \frac{[x, y, z]}{len} = [\frac{x}{len}, \frac{y}{len}, \frac{z}{len}]
$$

归一化一个矢量，就是将矢量的长度变为 `1`，方向不变。

## 矢量乘法

矢量有两种乘法，分别是点积和叉积。

### 点积

矢量点积的结果是一个标量，符号是一个点，是将两个矢量各个分量相乘再相加。

$$
[x1,y1,z1] \cdot [x2,y2,z2] = x1x2 + y1y2 + z1z2
$$

点积满足如下性值。

$$
A \cdot B = B \cdot A
$$
$$
(kA) \cdot B = k(A \cdot B) = A \cdot (kB)
$$
$$
A \cdot (B + C) = A \cdot B + A \cdot C
$$
$$
A \cdot A = \| A \|^2
$$

在几何上，矢量点积可以解释为投影。下图中的矢量 A 为单位矢量。

![](https://user-images.githubusercontent.com/25923128/121217192-2e37a800-c8b4-11eb-9311-485a835e58a5.png)

点积 $A \cdot B$ 等于 B 投影到平行于 A 的任意线上的有符号长度，乘以 A 的长度。

矢量的点积可以给两个矢量的方向做一个初略的判断，如果两个矢量方向差不多相同则点积大于 `0`，如果垂直则等于 `0`，如果差不多相反则小于 `0`。

利用点积我们还可以把一个矢量分解为两个矢量，分别是垂直分量和平行分量。

![](https://user-images.githubusercontent.com/25923128/120929271-fa754a80-c71a-11eb-802c-7c5ec1b657df.png)

上图中 A 还是单位矢量。我们知道 B 等于 $B\| + B\bot$。其中 $\|B\shortparallel \|$ 等于 $A \cdot B$ 。所以我们可以得出下面结论。

$$
B\| = \|B\shortparallel \| * A = (A \cdot B)A
$$
$$
B\bot = B - B\| = B - (A \cdot B)A
$$

我们还可以利用点积求出两个矢量间的夹角。

![](https://user-images.githubusercontent.com/25923128/120930415-b9336980-c71f-11eb-85f6-23ecf1312b0b.png)

上图中 A 和 B 都是单位矢量。根据基本三角函数，cos(θ) 等于对边的邻边比斜边。

$$
cos(\theta) = \frac{A \cdot B}{\| B \|} = A \cdot B
$$

两个单位矢量的点积就等于它们之间的余旋值。那么我们也可以得出任何矢量之间余旋值得公式。

$$
A \cdot B = \| A \| * \| B \| * cos(\theta)
$$
$$
\theta = arccos(\frac{A \cdot B}{\|A \| * \|B \|})
$$

### 叉积

叉积只能应用在三维中，矢量叉积将产生三维矢量，矢量叉积使用 $\times$ 符号。两个矢量叉积公式如下。

$$
[x1,y1,z1] \times [x2,y2,z2] = [y1z2 - z1y2, z1x2 - x1z2, x1y2 - y1x2]
$$

叉积和点积一起使用时，叉积优先 $A \cdot B \times C = A \cdot (B \times C)$ ，因为如果点积优先的话，点积的结果是标量，不能再进行叉积运算。

叉积还有如下特性。

$$
A \times B = -(B \times A)
$$
$$
(A \times B) \times C \not = A \times (B \times C)
$$

在几何上，叉积产生的矢量将垂直原始的两个矢量，并且 $A \times B$ 的长度等于 A 的长度乘以 B 的长度乘以它们间的正弦值。

![](https://user-images.githubusercontent.com/25923128/121220652-62609800-c8b7-11eb-885c-31c0ba51c846.png)

$$
\| A \times \| = \| A \| * \| B \| * sin(\theta)
$$

如果 A 和 B 平行，或如果 A 或 B 为零矢量，则 $A \times B$ 的结果为零矢量。

$A \times B$ 矢量会有两个方向，那么是哪个朝向的矢量呢？

我们需要将 B 矢量的尾部移动到 A 矢量的头部，然后观察是顺时针旋转还是逆时针旋转。

如果是顺时针旋转，在左手坐标系中 $A \times B$ 会指向你，右手坐标系是远离。如果是逆时针旋转，在左手坐标系中 $A \times B$ 是远离，右手坐标系是指向你。（如下图所示）

![](https://user-images.githubusercontent.com/25923128/121222887-86bd7400-c8b9-11eb-8250-3a98240691fe.png)

其实我们也可以伸出双手，和[坐标系](/2-coordinate.md)中一样，右手坐标系伸出右手，左手坐标系伸出左手。手握拳伸出大拇指，然后将 4 指按照上图旋转方向旋转，大拇指的方向就是 $A \times B$ 的方向。

## 矢量和点

我们发现我们并没有区分矢量和点，例如 `[x, y, z]`， 你可以说它是一个矢量，也可以说它是一个点。

矢量和点是两种概念，矢量有大小和方向，没有位置。而点只代表一个位置。

矢量可以描述位移，如果将 `[2, 2]` 的矢量，应用在 `[1, 1]` 的点上，则代表将点移动到 `[3, 3]` 位置。我们也可以将点表示为来自原点的矢量。

![](https://user-images.githubusercontent.com/25923128/121225571-3c89c200-c8bc-11eb-8a47-ace4f8cd2bd0.png)

可以再添加一个分量来区分点和矢量，比如在三维中我们可以使用 4 个分量来区分点和矢量。`[x, y, z, w]`，如果 `w` 是 `0` 则代表矢量，否则代表是点，这也称为齐次坐标，将在后面章节中讲解。