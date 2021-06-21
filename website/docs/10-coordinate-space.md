# 坐标空间

我们前面学到了各种变换矩阵用来变换物体，相机从某个位置来观看场景，投影矩阵将场景转换到 NDC。我们每将物体顶点应用一个矩阵其实都是将物体转换到矩阵的空间，矩阵的 3 列是新坐标空间的基矢量。渲染一个场景我们一般会使用 3 个矩阵将场景转换到 3 个坐标空间，这几个步骤是分步进行就和流水线一样。

物体最初是在对象空间，经过模型变换（Model Transform）将物体转换到世界空间，在世界空间中经过视图变换（View Transform）转换成相机空间（或眼空间）最后通过投影变换（Projection Transform）变换到裁切空间。这几次变换简称为 MVP 变换，一般每个物体在渲染之前都会进行这 3 次变换。

![image](https://user-images.githubusercontent.com/25923128/122650168-ef330d80-d163-11eb-94d0-ee2270f5ca48.png)

## 对象空间

对象空间也称为局部空间，制作 3D 模型时我们并不知道这个模型最终在场景中的位置，一般将模型放在坐标轴的正中间，就像我们之前手写封装的盒子，我们也将它的中心放到坐标轴的正中心。

## 世界空间

世界空间就是我们渲染的一个场景，所有模型都在这个空间，这些模型默认都在对象空间也就是全部都在坐标原点。我们需要使用**模型变换**分别将这个模型变换到它应该在的位置。比如一个飞机模型，我们可以使用模型变换将它变换到世界坐标的空中位置。或者一个模型太大了，我们使用**模型变换**将它缩小。在模型变换后，我们就将这些模型从原点变换到它们应该在的位置并且是合适的大小和旋转角度。

## 相机空间

相机空间也称观察空间是从相机的视角所观察到的空间，将模型都放在了合适的位置后，我们就需要以一个角度去观察这个场景，通过**视图变换**将世界空间变换到相机空间。

## 裁剪空间

OpenGL 只会将 XYZ 轴 -1 和 1 之间物体渲染到屏幕，这个范围之外的点都应该被裁剪掉。在转换到相机空间后，我们还需要使用**投影矩阵**将相机空间转换到这个规则观察体空间，由投影矩阵创建的观察箱被称为平截头体(Frustum)，不同的投影矩阵会形成不同的平截头体，[上篇文章](/9-projection.md)中，我们知道正交投影是一个方方正正的盒子，透视投影是四角锥台。使用**投影矩阵**转换到裁切空间后，OpenGL 会在顶点着色器执行后，自动执行齐次除法得到每个点的坐标。

## 渲染管线

我们现在来将这些概念全部串起来，一个模型渲染到显示器上一共会经过哪些步骤。

1. 首先提供

## gl_FragCoord

## 渲染多个立方体
