export interface Question {
  id: string;
  text: string;
  options: string[];
  answer: number;
  explanation: string;
  level: 'low' | 'mid' | 'high';
}

export interface PhysicsTopic {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: {
    concepts: { name: string; definition: string }[];
    formulas: { name: string; formula: string; explanation: string }[];
    examples: { question: string; answer: string }[];
  };
  quizzes: Question[];
}

export const physicsTopics: PhysicsTopic[] = [
  {
    id: "mechanics-motion",
    title: "第一章：机械运动",
    icon: "Activity",
    description: "人教版八年级上册第一章。研究物体的运动快慢、测量及参照物选择。",
    content: {
      concepts: [
        { name: "长度的测量", definition: "测量长度的基本工具是刻度尺。国际单位是米(m)。" },
        { name: "参照物", definition: "判断物体是否运动时，选作标准的物体。" },
        { name: "速度 (v)", definition: "表示物体运动快慢的物理量，等于路程与时间的比值。" }
      ],
      formulas: [
        { name: "速度公式", formula: "v = s / t", explanation: "v-速度(m/s)，s-路程(m)，t-时间(s)。" }
      ],
      examples: [
        { question: "一辆汽车以72km/h的速度行驶，合多少m/s？", answer: "72km/h = 72 * (1000m / 3600s) = 20m/s。" }
      ]
    },
    quizzes: [
      {
        id: "mm-l-1",
        level: "low",
        text: "某同学用刻度尺测量物体长度，四次测量结果分别为12.51cm, 12.52cm, 12.91cm, 12.53cm。则物体的长度应记为：",
        options: ["12.62cm", "12.52cm", "12.51cm", "12.53cm"],
        answer: 1,
        explanation: "12.91cm与其他数值偏差过大，属于错误数据应剔除。剩余三次测量的平均值为(12.51+12.52+12.53)/3 = 12.52cm。"
      },
      {
        id: "mm-l-2",
        level: "low",
        text: "关于误差，下列说法正确的是：",
        options: ["误差就是测量中的错误", "选用精密的测量仪器可以消除误差", "多次测量求平均值可以减小误差", "只要认真测量，就可以避免误差"],
        answer: 2,
        explanation: "误差是不可避免的，只能减小。多次测量求平均值、选用精密仪器、改进测量方法都可以减小误差，但不能消除。"
      },
      {
        id: "mm-l-3",
        level: "low",
        text: "在百米赛跑中，裁判员听到发令枪响才开始计时，测得运动员的成绩为12.5s，则运动员的实际成绩是：",
        options: ["大于12.5s", "小于12.5s", "等于12.5s", "无法判断"],
        answer: 0,
        explanation: "声音传播需要时间，裁判听到枪声时运动员已经跑了一段距离，所以计出的时间比实际时间短，实际成绩应大于12.5s。"
      },
      {
        id: "mm-m-1",
        level: "mid",
        text: "甲、乙两物体做匀速直线运动，它们通过的路程之比为3:2，所用时间之比为2:1，则它们的速度之比为：",
        options: ["3:4", "3:1", "4:3", "1:3"],
        answer: 0,
        explanation: "根据v=s/t，v甲/v乙 = (s甲/t甲) / (s乙/t乙) = (3/2) / (2/1) = 3/4。"
      },
      {
        id: "mm-m-2",
        level: "mid",
        text: "甲、乙两车在平直公路上同向行驶，甲车的速度是15m/s，乙车的速度是10m/s。以乙车为参照物，甲车的运动情况是：",
        options: ["向后运动", "向前运动", "静止", "无法判断"],
        answer: 1,
        explanation: "甲车比乙车快且同向，以乙车为标准，甲车在不断远离并向前移动。"
      },
      {
        id: "mm-m-3",
        level: "mid",
        text: "一个物体做匀速直线运动，在10s内通过的路程是20m，则它在前2s内的速度是：",
        options: ["2m/s", "4m/s", "10m/s", "20m/s"],
        answer: 0,
        explanation: "匀速直线运动的速度是不变的。v = s/t = 20m/10s = 2m/s。所以任何时刻速度都是2m/s。"
      },
      {
        id: "mm-h-1",
        level: "high",
        text: "某同学骑自行车前一半路程的速度是4m/s，后一半路程的速度是6m/s，则全程的平均速度是：",
        options: ["5m/s", "4.8m/s", "5.2m/s", "4.5m/s"],
        answer: 1,
        explanation: "设半程为s，总时间t = s/v1 + s/v2。平均速度v = 2s / (s/v1 + s/v2) = 2v1v2/(v1+v2) = 2*4*6/(4+6) = 4.8m/s。"
      },
      {
        id: "mm-h-2",
        level: "high",
        text: "一列长200m的火车以20m/s的速度匀速通过一座长1.6km的大桥，火车完全在桥上的时间是：",
        options: ["90s", "80s", "70s", "10s"],
        answer: 2,
        explanation: "火车完全在桥上，路程s = 桥长 - 车长 = 1600m - 200m = 1400m。时间t = 1400/20 = 70s。"
      },
      {
        id: "mm-h-3",
        level: "high",
        text: "甲、乙两物体同时同地同向开始做匀速直线运动，甲的速度为4m/s，乙的速度为3m/s。经过多长时间两车相距10m？",
        options: ["2.5s", "10s", "5s", "3.3s"],
        answer: 1,
        explanation: "Δs = (v甲 - v乙) * t => 10 = (4 - 3) * t => t = 10s。"
      }
    ]
  },
  {
    id: "sound",
    title: "第二章：声现象",
    icon: "Volume2",
    description: "人教版八年级上册第二章。研究声音的产生、传播及特性。",
    content: {
      concepts: [
        { name: "声音的产生", definition: "声音是由物体的振动产生的。" },
        { name: "声音的传播", definition: "声音的传播需要介质（固体、液体、气体），真空不能传声。" },
        { name: "音调、响度、音色", definition: "声音的三大特性。音调由频率决定，响度由振幅决定。" }
      ],
      formulas: [
        { name: "声速", formula: "v = 340m/s (15℃空气)", explanation: "声音在不同介质和温度下传播速度不同。" }
      ],
      examples: [
        { question: "对着山崖喊一声，4s后听到回声，山崖多远？", answer: "s = 1/2 * v * t = 1/2 * 340 * 4 = 680m。" }
      ]
    },
    quizzes: [
      {
        id: "s-l-1",
        level: "low",
        text: "关于声音的产生，下列说法正确的是：",
        options: ["只要物体振动，就能听到声音", "声音是由物体振动产生的", "停止振动，声音就会消失", "只有固体振动才能产生声音"],
        answer: 1,
        explanation: "声音是由物体振动产生的。振动停止，发声停止，但声音可能还在介质中传播，不会立即消失。听到声音还需要介质和健康的耳朵。"
      },
      {
        id: "s-l-2",
        level: "low",
        text: "在月球上，宇航员即使离得很近也只能通过无线电交谈，这是因为：",
        options: ["月球上太冷", "月球上没有空气，真空不能传声", "宇航员的声带无法振动", "无线电波比声波传播快"],
        answer: 1,
        explanation: "声音的传播需要介质，真空不能传声。月球上没有空气，所以声波无法传播。"
      },
      {
        id: "s-l-3",
        level: "low",
        text: "敲鼓时，用力越大，鼓面振动的振幅越大，则声音的：",
        options: ["音调越高", "响度越大", "音色越好", "传播越快"],
        answer: 1,
        explanation: "响度与振幅有关，振幅越大，响度越大。"
      },
      {
        id: "s-m-1",
        level: "mid",
        text: "拨动琴弦时，琴弦越短、越细、越紧，振动越快，发出声音的：",
        options: ["音调越高", "响度越大", "音色越好", "速度越快"],
        answer: 0,
        explanation: "音调与频率有关，振动越快，频率越高，音调越高。"
      },
      {
        id: "s-m-2",
        level: "mid",
        text: "下列属于在传播过程中减弱噪声的是：",
        options: ["摩托车安装消声器", "工厂工人戴防噪声耳罩", "道路两旁植树造林", "学校附近禁止鸣笛"],
        answer: 2,
        explanation: "消声器和禁鸣是在声源处减弱；耳罩是在人耳处减弱；植树造林是在传播过程中减弱。"
      },
      {
        id: "s-m-3",
        level: "mid",
        text: "医生利用超声波除去人体内的结石，这说明：",
        options: ["声音可以传递信息", "声音可以传递能量", "超声波不是声音", "超声波传播速度极快"],
        answer: 1,
        explanation: "超声波碎石利用了声波可以传递能量的特性。"
      },
      {
        id: "s-h-1",
        level: "high",
        text: "对着高山大喊一声，4s后听到回声，则人与高山的距离约为（声速取340m/s）：",
        options: ["1360m", "680m", "340m", "2720m"],
        answer: 1,
        explanation: "回声测距中，声音走过的路程是距离的两倍。s = v * t / 2 = 340 * 4 / 2 = 680m。"
      },
      {
        id: "s-h-2",
        level: "high",
        text: "关于声现象，下列说法正确的是：",
        options: ["‘闻其声而知其人’主要是根据响度来判断的", "医生用听诊器诊病是利用声音传递能量", "声音在空气中的传播速度一定是340m/s", "‘震耳欲聋’说明声音的响度大"],
        answer: 3,
        explanation: "知其人靠音色；听诊器靠传递信息；声速受温度影响；震耳欲聋指响度大。"
      },
      {
        id: "s-h-3",
        level: "high",
        text: "在长给水管的一端敲一下，在另一端能听到三次响声，这三次响声传播的介质顺序是：",
        options: ["水、空气、钢管", "钢管、水、空气", "空气、水、钢管", "钢管、空气、水"],
        answer: 1,
        explanation: "声音在不同介质中传播速度不同，通常 v固 > v液 > v气。所以最先听到的是钢管传来的，最后是空气。"
      }
    ]
  },
  {
    id: "state-change",
    title: "第三章：物态变化",
    icon: "Thermometer",
    description: "人教版八年级上册第三章。研究熔化、凝固、汽化、液化、升华和凝华。",
    content: {
      concepts: [
        { name: "熔化与凝固", definition: "物质从固态变为液态叫熔化（吸热），从液态变为固态叫凝固（放热）。" },
        { name: "汽化与液化", definition: "物质从液态变为气态叫汽化（吸热），从气态变为液态叫液化（放热）。" },
        { name: "升华与凝华", definition: "物质从固态直接变为气态叫升华（吸热），从气态直接变为固态叫凝华（放热）。" }
      ],
      formulas: [
        { name: "摄氏温度", formula: "t = T - 273.15", explanation: "摄氏度(℃)与热力学温度(K)的关系。" }
      ],
      examples: [
        { question: "夏天冰棍冒“白气”是什么现象？", answer: "液化。空气中的水蒸气遇冷液化成小水珠。" }
      ]
    },
    quizzes: [
      {
        id: "sc-l-1",
        level: "low",
        text: "下列现象中，属于熔化的是：",
        options: ["洒在地上的水变干了", "湖面上的水结成冰", "冰淇淋变成水", "草叶上出现露珠"],
        answer: 2,
        explanation: "熔化是物质从固态变成液态的过程。冰淇淋变水是熔化。"
      },
      {
        id: "sc-l-2",
        level: "low",
        text: "用体温计测得小明的体温为37.3℃，若没有甩就直接测量小华（36.8℃）的体温，则读数将是：",
        options: ["36.8℃", "37.3℃", "37.0℃", "无法确定"],
        answer: 1,
        explanation: "体温计有缩口，水银只能升不能降（除非甩）。如果下一个人体温低，读数保持不变。"
      },
      {
        id: "sc-l-3",
        level: "low",
        text: "夏天，从冰箱拿出的饮料瓶外壁会出现小水珠，这是：",
        options: ["汽化", "液化", "凝固", "熔化"],
        answer: 1,
        explanation: "空气中的水蒸气遇到冷的瓶壁放热液化成小水珠。"
      },
      {
        id: "sc-m-1",
        level: "mid",
        text: "关于晶体和非晶体，下列说法正确的是：",
        options: ["晶体和非晶体熔化时都要吸热", "晶体熔化时吸热，温度不断升高", "非晶体熔化时吸热，温度保持不变", "凡是固体都有固定的熔点"],
        answer: 0,
        explanation: "所有熔化都要吸热。晶体有固定熔点（温度不变），非晶体没有。"
      },
      {
        id: "sc-m-2",
        level: "mid",
        text: "下列措施中，为了减慢蒸发的是：",
        options: ["将湿衣服晾在通风向阳处", "用电吹风吹干湿头发", "将蔬菜装入保鲜袋放入冰箱", "把地上的积水向四周扫开"],
        answer: 2,
        explanation: "减慢蒸发的方法：减小表面积、降低温度、减慢空气流动。保鲜袋和冰箱符合。"
      },
      {
        id: "sc-m-3",
        level: "mid",
        text: "水沸腾过程中，下列说法正确的是：",
        options: ["继续吸热，温度升高", "停止吸热，温度保持不变", "继续吸热，温度保持不变", "停止吸热，继续沸腾"],
        answer: 2,
        explanation: "液体沸腾的条件：达到沸点，继续吸热。特点：继续吸热，温度不变。"
      },
      {
        id: "sc-h-1",
        level: "high",
        text: "冬天，窗玻璃上会出现冰花，冰花出现在玻璃的：",
        options: ["内侧，是凝华现象", "内侧，是凝固现象", "外侧，是凝华现象", "外侧，是凝固现象"],
        answer: 0,
        explanation: "室内暖湿空气遇到冷的玻璃放热直接变成小冰晶，是凝华，出现在内侧。"
      },
      {
        id: "sc-h-2",
        level: "high",
        text: "下列物态变化中，需要吸热的是：",
        options: ["初春，冰雪消融", "盛夏，露珠晶莹", "深秋，红叶蒙霜", "严冬，滴水成冰"],
        answer: 0,
        explanation: "吸热的过程：熔化、汽化、升华。冰雪消融是熔化，吸热。"
      },
      {
        id: "sc-h-3",
        level: "high",
        text: "舞台上喷洒干冰（固态二氧化碳）可以产生白雾，其原理是：",
        options: ["干冰熔化吸热，使水蒸气液化", "干冰升华吸热，使空气液化", "干冰升华吸热，使水蒸气液化", "干冰汽化吸热，使水蒸气液化"],
        answer: 2,
        explanation: "干冰升华吸收大量热，使周围空气温度降低，空气中的水蒸气遇冷液化成小水珠（白雾）。"
      }
    ]
  },
  {
    id: "light",
    title: "第四章：光现象",
    icon: "Sun",
    description: "人教版八年级上册第四章。研究光的直线传播、反射、折射及色散。",
    content: {
      concepts: [
        { name: "光的直线传播", definition: "光在同种均匀介质中沿直线传播。" },
        { name: "光的反射定律", definition: "反射光线、入射光线与法线在同一平面内；反射角等于入射角。" },
        { name: "光的折射", definition: "光从一种介质斜射入另一种介质时，传播方向发生偏折。" }
      ],
      formulas: [
        { name: "光速", formula: "c = 3.0 * 10^8 m/s", explanation: "光在真空中的传播速度。" }
      ],
      examples: [
        { question: "平静的湖面看到倒影是由于什么？", answer: "光的反射（平面镜成像）。" }
      ]
    },
    quizzes: [
      {
        id: "l-l-1",
        level: "low",
        text: "下列物体中属于光源的是：",
        options: ["月亮", "放映时的银幕", "萤火虫", "金子"],
        answer: 2,
        explanation: "光源是能自行发光的物体。月亮、银幕、金子都是反射光。"
      },
      {
        id: "l-l-2",
        level: "low",
        text: "小孔成像现象说明了：",
        options: ["光的反射", "光的折射", "光的直线传播", "光的色散"],
        answer: 2,
        explanation: "小孔成像是光沿直线传播的经典实验。"
      },
      {
        id: "l-l-3",
        level: "low",
        text: "光在真空中的传播速度约为：",
        options: ["340m/s", "3×10^8m/s", "3×10^5m/s", "1.5×10^8m/s"],
        answer: 1,
        explanation: "光在真空中的速度是宇宙中最快的速度，约为3×10^8m/s。"
      },
      {
        id: "l-m-1",
        level: "mid",
        text: "一束光与镜面成30°角入射，则反射角为：",
        options: ["30°", "60°", "90°", "120°"],
        answer: 1,
        explanation: "入射角是入射光线与法线的夹角。法线垂直镜面，所以入射角 = 90° - 30° = 60°。反射角等于入射角，也是60°。"
      },
      {
        id: "l-m-2",
        level: "mid",
        text: "平静的湖面能清晰地映出岸边的景物，这是因为：",
        options: ["漫反射", "镜面反射", "光的折射", "光的直线传播"],
        answer: 1,
        explanation: "平静的水面相当于平面镜，发生的是镜面反射。"
      },
      {
        id: "l-m-3",
        level: "mid",
        text: "关于平面镜成像，下列说法正确的是：",
        options: ["物体离平面镜越远，像越小", "平面镜成的是实像", "像与物到平面镜的距离相等", "像与物的大小不一定相等"],
        answer: 2,
        explanation: "平面镜成像特点：等大、等距、垂直、虚像。像的大小只取决于物体大小。"
      },
      {
        id: "l-h-1",
        level: "high",
        text: "光从空气斜射入水中，折射角：",
        options: ["大于入射角", "小于入射角", "等于入射角", "始终为0°"],
        answer: 1,
        explanation: "光从空气斜射入水（或其他介质）中时，折射光线向法线偏折，折射角小于入射角。"
      },
      {
        id: "l-h-2",
        level: "high",
        text: "下列现象中，属于光的折射的是：",
        options: ["日食和月食", "水中倒影", "海市蜃楼", "影子的形成"],
        answer: 2,
        explanation: "海市蜃楼是光在不均匀的大气中发生折射形成的。"
      },
      {
        id: "l-h-3",
        level: "high",
        text: "白光通过三棱镜后分解成红、橙、黄、绿、蓝、靛、紫七种颜色的光，这说明：",
        options: ["白光是单色光", "白光是复色光", "三棱镜能产生颜色", "光发生了反射"],
        answer: 1,
        explanation: "光的色散实验证明了白光是由多种色光混合而成的复色光。"
      }
    ]
  },
  {
    id: "lens",
    title: "第五章：透镜及其应用",
    icon: "Target",
    description: "人教版八年级上册第五章。研究凸透镜成像规律、眼睛及显微镜。",
    content: {
      concepts: [
        { name: "凸透镜成像规律", definition: "u>2f成倒立缩小实像；f<u<2f成倒立放大实像；u<f成正立放大虚像。" },
        { name: "近视眼与远视眼", definition: "近视眼用凹透镜矫正，远视眼用凸透镜矫正。" }
      ],
      formulas: [
        { name: "放大率", formula: "M = v / u", explanation: "像距与物距的比值。" }
      ],
      examples: [
        { question: "照相机的成像特点是什么？", answer: "倒立、缩小的实像。" }
      ]
    },
    quizzes: [
      {
        id: "ln-l-1",
        level: "low",
        text: "凸透镜对光线有____作用。",
        options: ["会聚", "发散", "反射", "吸收"],
        answer: 0,
        explanation: "凸透镜是会聚透镜，能使平行光会聚于焦点。"
      },
      {
        id: "ln-l-2",
        level: "low",
        text: "下列光学器件中，利用凸透镜成像原理的是：",
        options: ["潜望镜", "穿衣镜", "照相机", "近视眼镜"],
        answer: 2,
        explanation: "照相机、投影仪、放大镜都利用了凸透镜成像。潜望镜和穿衣镜是平面镜，近视镜是凹透镜。"
      },
      {
        id: "ln-l-3",
        level: "low",
        text: "关于透镜，下列说法正确的是：",
        options: ["凸透镜只对平行光有会聚作用", "凹透镜对光线有发散作用", "通过透镜光心的光线传播方向会发生改变", "凸透镜的焦距越短，折光能力越弱"],
        answer: 1,
        explanation: "凹透镜是发散透镜。通过光心的光线传播方向不变。焦距越短，折光能力越强。"
      },
      {
        id: "ln-m-1",
        level: "mid",
        text: "放大镜成的是：",
        options: ["倒立放大的实像", "正立放大的虚像", "正立缩小的虚像", "倒立缩小的实像"],
        answer: 1,
        explanation: "放大镜利用物距小于焦距（u < f）成正立放大的虚像。"
      },
      {
        id: "ln-m-2",
        level: "mid",
        text: "用照相机拍照时，物体在镜头前形成的像是：",
        options: ["正立缩小的实像", "倒立放大的实像", "倒立缩小的实像", "正立放大的虚像"],
        answer: 2,
        explanation: "照相机原理：u > 2f，成倒立、缩小的实像。"
      },
      {
        id: "ln-m-3",
        level: "mid",
        text: "某同学在做凸透镜成像实验时，发现光屏上成了一个清晰等大的像，此时物距为20cm，则该透镜的焦距为：",
        options: ["10cm", "20cm", "40cm", "5cm"],
        answer: 0,
        explanation: "成等大实像时，u = 2f。20cm = 2f => f = 10cm。"
      },
      {
        id: "ln-h-1",
        level: "high",
        text: "近视眼是因为晶状体太厚，折光能力太强，使像成在视网膜的：",
        options: ["前方", "后方", "上方", "下方"],
        answer: 0,
        explanation: "近视眼成像在视网膜前方，需用凹透镜矫正。"
      },
      {
        id: "ln-h-2",
        level: "high",
        text: "在“探究凸透镜成像规律”的实验中，当蜡烛从远处向透镜靠近时（仍在焦距外），像的大小和像距的变化情况是：",
        options: ["像变大，像距变大", "像变小，像距变小", "像变大，像距变小", "像变小，像距变大"],
        answer: 0,
        explanation: "凸透镜成实像时，“物近像远像变大”。"
      },
      {
        id: "ln-h-3",
        level: "high",
        text: "老花镜（远视镜）的度数等于焦距（以米为单位）倒数的100倍。某老花镜是200度，则它的焦距是：",
        options: ["0.5m", "2m", "1m", "0.2m"],
        answer: 0,
        explanation: "度数 D = 100 / f => 200 = 100 / f => f = 0.5m。"
      }
    ]
  },
  {
    id: "density",
    title: "第六章：质量与密度",
    icon: "Scale",
    description: "人教版八年级上册第六章。研究物质的质量测量及密度特性。",
    content: {
      concepts: [
        { name: "质量 (m)", definition: "物体所含物质的多少。不随形状、状态、位置改变。" },
        { name: "密度 (ρ)", definition: "单位体积某种物质的质量。是物质的一种特性。" }
      ],
      formulas: [
        { name: "密度公式", formula: "ρ = m / V", explanation: "ρ-密度(kg/m³)，m-质量(kg)，V-体积(m³)。" }
      ],
      examples: [
        { question: "水的密度是多少？", answer: "1.0 * 10^3 kg/m³，表示1立方米水的质量是1000kg。" }
      ]
    },
    quizzes: [
      {
        id: "d-l-1",
        level: "low",
        text: "实验室测量质量的工具是：",
        options: ["量筒", "刻度尺", "天平", "弹簧测力计"],
        answer: 2,
        explanation: "托盘天平是实验室测量质量的常用工具。"
      },
      {
        id: "d-l-2",
        level: "low",
        text: "关于质量，下列说法正确的是：",
        options: ["物体的质量随形状改变而改变", "物体的质量随状态改变而改变", "物体的质量随位置改变而改变", "物体的质量是物体本身的一种属性"],
        answer: 3,
        explanation: "质量是物体的基本属性，不随形状、状态、位置的改变而改变。"
      },
      {
        id: "d-l-3",
        level: "low",
        text: "在国际单位制中，密度的单位是：",
        options: ["kg", "m³", "kg/m³", "g/cm³"],
        answer: 2,
        explanation: "密度的国际单位是千克每立方米(kg/m³)。"
      },
      {
        id: "d-m-1",
        level: "mid",
        text: "一块冰熔化成水后，它的质量____，密度____。",
        options: ["变大，变小", "不变，变大", "变小，变大", "不变，不变"],
        answer: 1,
        explanation: "质量不随状态改变；水的密度大于冰，所以密度变大。"
      },
      {
        id: "d-m-2",
        level: "mid",
        text: "一个实心铝块的密度是2.7g/cm³，把它切去一半，剩余部分的密度是：",
        options: ["1.35g/cm³", "2.7g/cm³", "5.4g/cm³", "无法确定"],
        answer: 1,
        explanation: "密度是物质的特性，不随质量和体积的改变而改变。"
      },
      {
        id: "d-m-3",
        level: "mid",
        text: "甲、乙两个物体质量之比为2:3，体积之比为3:2，则它们的密度之比为：",
        options: ["1:1", "4:9", "9:4", "2:3"],
        answer: 1,
        explanation: "ρ = m/V。ρ甲/ρ乙 = (m甲/m乙) / (V甲/V乙) = (2/3) / (3/2) = 4/9。"
      },
      {
        id: "d-h-1",
        level: "high",
        text: "甲、乙两个物体质量之比为3:2，体积之比为1:3，则它们的密度之比为：",
        options: ["1:1", "9:2", "4:9", "2:9"],
        answer: 1,
        explanation: "ρ = m/V。ρ甲/ρ乙 = (m甲/m乙) / (V甲/V乙) = (3/2) / (1/3) = 9/2。"
      },
      {
        id: "d-h-2",
        level: "high",
        text: "一个空瓶子的质量是200g，装满水后的总质量是700g。若装满另一种液体后的总质量是600g，则该液体的密度是：",
        options: ["0.8g/cm³", "1.2g/cm³", "0.6g/cm³", "1.0g/cm³"],
        answer: 0,
        explanation: "V瓶 = V水 = (700-200)/1 = 500cm³。ρ液 = m液/V瓶 = (600-200)/500 = 0.8g/cm³。"
      },
      {
        id: "d-h-3",
        level: "high",
        text: "一个质量为178g的铜球，体积为30cm³（ρ铜=8.9g/cm³），则该球是：",
        options: ["实心的", "空心的", "无法判断", "由其他物质组成的"],
        answer: 1,
        explanation: "实心铜球体积应为 V = m/ρ = 178/8.9 = 20cm³。实际体积30cm³ > 20cm³，所以是空心的。"
      }
    ]
  },
  {
    id: "force",
    title: "第七章：力",
    icon: "Zap",
    description: "人教版八年级下册第七章。研究力的概念、弹力及重力。",
    content: {
      concepts: [
        { name: "力的作用效果", definition: "改变物体的形状；改变物体的运动状态。" },
        { name: "力的三要素", definition: "力的大小、方向、作用点。" },
        { name: "重力 (G)", definition: "由于地球吸引而使物体受到的力。方向竖直向下。" }
      ],
      formulas: [
        { name: "重力公式", formula: "G = mg", explanation: "g = 9.8N/kg (常取10N/kg)。" }
      ],
      examples: [
        { question: "一个质量为50kg的人，受到的重力是多少？", answer: "G = mg = 50kg * 10N/kg = 500N。" }
      ]
    },
    quizzes: [
      {
        id: "f-l-1",
        level: "low",
        text: "力的单位是：",
        options: ["千克(kg)", "牛顿(N)", "米(m)", "秒(s)"],
        answer: 1,
        explanation: "力的国际单位是牛顿(N)。"
      },
      {
        id: "f-l-2",
        level: "low",
        text: "关于力，下列说法正确的是：",
        options: ["一个物体也能产生力的作用", "相互接触的物体一定产生力", "力是物体对物体的作用", "力可以脱离物体而独立存在"],
        answer: 2,
        explanation: "力是物体对物体的作用，产生力至少需要两个物体。"
      },
      {
        id: "f-l-3",
        level: "low",
        text: "下列现象中，力的作用效果与其他三个不同的是：",
        options: ["用力把弹簧拉长", "用力把皮球捏扁", "用力把足球踢出去", "用力把泥团捏扁"],
        answer: 2,
        explanation: "踢足球是改变运动状态，其他三个是改变形状。"
      },
      {
        id: "f-m-1",
        level: "mid",
        text: "下列关于重力的说法，正确的是：",
        options: ["重力的方向总是垂直向下", "重力的方向总是竖直向下", "物体的质量越大，受到的重力越小", "重力的作用点在物体的表面"],
        answer: 1,
        explanation: "重力的方向总是竖直向下（指向地心）。"
      },
      {
        id: "f-m-2",
        level: "mid",
        text: "在弹性限度内，弹簧受到的拉力越大，弹簧的伸长量就越长。利用这个原理制作的是：",
        options: ["天平", "量筒", "弹簧测力计", "压强计"],
        answer: 2,
        explanation: "弹簧测力计的原理：在弹性限度内，弹簧的伸长量与受到的拉力成正比。"
      },
      {
        id: "f-m-3",
        level: "mid",
        text: "一个质量为50kg的中学生，受到的重力约为：",
        options: ["50N", "500N", "5N", "5000N"],
        answer: 1,
        explanation: "G = mg = 50kg * 10N/kg = 500N。"
      },
      {
        id: "f-h-1",
        level: "high",
        text: "用50N的力将重20N的木块紧压在竖直墙壁上，木块静止，则木块受到的摩擦力为：",
        options: ["50N", "20N", "70N", "30N"],
        answer: 1,
        explanation: "木块静止，竖直方向受力平衡，摩擦力等于重力，为20N。"
      },
      {
        id: "f-h-2",
        level: "high",
        text: "游泳时，手向后划水，人就向前进。这说明：",
        options: ["力可以改变物体的运动状态", "力的作用是相互的", "力可以改变物体的形状", "人受到的重力变小了"],
        answer: 1,
        explanation: "手给水向后的力，水给手向前的反作用力，说明力的作用是相互的。"
      },
      {
        id: "f-h-3",
        level: "high",
        text: "甲、乙两人各用10N的力沿水平方向向相反方向拉同一弹簧测力计的两端，则测力计的示数为：",
        options: ["20N", "10N", "0N", "5N"],
        answer: 1,
        explanation: "弹簧测力计测量的是挂钩受到的力。两端各拉10N，示数仍为10N。"
      }
    ]
  },
  {
    id: "motion-force",
    title: "第八章：运动和力",
    icon: "Activity",
    description: "人教版八年级下册第八章。研究牛顿第一定律、惯性及二力平衡。",
    content: {
      concepts: [
        { name: "牛顿第一定律", definition: "一切物体在没有受到力的作用时，总保持静止状态或匀速直线运动状态。" },
        { name: "惯性", definition: "物体保持原来运动状态不变的性质。一切物体都有惯性。" },
        { name: "二力平衡", definition: "物体在两个力作用下保持静止或匀速直线运动状态。" }
      ],
      formulas: [
        { name: "平衡条件", formula: "F1 = F2", explanation: "大小相等、方向相反、作用在同一直线上、作用在同一物体上。" }
      ],
      examples: [
        { question: "为什么汽车刹车时乘客会向前倾？", answer: "由于惯性，乘客要保持原来的运动状态继续向前运动。" }
      ]
    },
    quizzes: [
      {
        id: "mf-l-1",
        level: "low",
        text: "牛顿第一定律是在____的基础上，通过进一步的推理而概括出来的。",
        options: ["实验", "观察", "想象", "实验和推理"],
        answer: 3,
        explanation: "牛顿第一定律是在实验的基础上，通过科学推理得出的。"
      },
      {
        id: "mf-l-2",
        level: "low",
        text: "关于惯性，下列说法正确的是：",
        options: ["物体运动时才有惯性", "物体静止时才有惯性", "任何物体在任何状态下都有惯性", "物体速度越大，惯性越大"],
        answer: 2,
        explanation: "惯性是物体的一种属性，只与质量有关，与运动状态和速度无关。"
      },
      {
        id: "mf-l-3",
        level: "low",
        text: "下列措施中，属于增大摩擦的是：",
        options: ["给机器加润滑油", "在冰面上撒沙子", "气垫船利用气垫减小阻力", "磁悬浮列车悬浮行驶"],
        answer: 1,
        explanation: "撒沙子增加了接触面的粗糙程度，从而增大了摩擦。"
      },
      {
        id: "mf-m-1",
        level: "mid",
        text: "下列现象中，属于利用惯性的是：",
        options: ["汽车刹车时，乘客向前倾", "跳远运动员助跑", "汽车超速行驶易出事故", "严禁酒后驾车"],
        answer: 1,
        explanation: "跳远助跑是利用惯性使人跳得更远。"
      },
      {
        id: "mf-m-2",
        level: "mid",
        text: "一个物体受到两个力的作用，如果这两个力平衡，则这两个力：",
        options: ["大小相等，方向相同", "大小相等，方向相反，在同一直线上", "大小不等，方向相反", "作用在两个不同的物体上"],
        answer: 1,
        explanation: "二力平衡条件：等大、反向、共线、同体。"
      },
      {
        id: "mf-m-3",
        level: "mid",
        text: "正在行驶的汽车，如果受到的所有外力突然消失，它将：",
        options: ["立即停下来", "做匀速直线运动", "速度越来越慢", "做圆周运动"],
        answer: 1,
        explanation: "根据牛顿第一定律，原来运动的物体不受力时将保持匀速直线运动状态。"
      },
      {
        id: "mf-h-1",
        level: "high",
        text: "一个物体在10N的水平拉力作用下，在水平面上做匀速直线运动，则物体受到的摩擦力是：",
        options: ["10N", "0N", "大于10N", "小于10N"],
        answer: 0,
        explanation: "匀速直线运动受力平衡，拉力等于摩擦力。"
      },
      {
        id: "mf-h-2",
        level: "high",
        text: "用10N的水平推力推重为100N的木箱，木箱静止在水平地面上，则木箱受到的摩擦力是：",
        options: ["100N", "10N", "0N", "90N"],
        answer: 1,
        explanation: "木箱静止，受平衡力。水平方向推力与静摩擦力平衡，f = F = 10N。"
      },
      {
        id: "mf-h-3",
        level: "high",
        text: "在平直公路上匀速行驶的汽车，受到的力中属于平衡力的是：",
        options: ["汽车受到的重力和地面对汽车的支持力", "汽车受到的牵引力和汽车受到的重力", "汽车受到的阻力和地面对汽车的支持力", "汽车对地面的压力和地面对汽车的支持力"],
        answer: 0,
        explanation: "重力和支持力在竖直方向大小相等、方向相反、作用在同一物体上，是平衡力。"
      }
    ]
  },
  {
    id: "pressure",
    title: "第九章：压强",
    icon: "ArrowDown",
    description: "人教版八年级下册第九章。研究压力、压强、液体压强及大气压强。",
    content: {
      concepts: [
        { name: "压强 (p)", definition: "物体所受压力的大小与受力面积之比。" },
        { name: "液体压强", definition: "液体内部向各个方向都有压强，随深度增加而增大。" },
        { name: "大气压强", definition: "大气对浸在它里面的物体产生的压强。托里拆利实验测定了大气压值。" }
      ],
      formulas: [
        { name: "压强公式", formula: "p = F / S", explanation: "p-压强(Pa)，F-压力(N)，S-受力面积(m²)。" },
        { name: "液体压强公式", formula: "p = ρgh", explanation: "ρ-液体密度，g-重力常数，h-深度。" }
      ],
      examples: [
        { question: "为什么书包带要做得宽一些？", answer: "增大受力面积，减小压强，使肩膀更舒服。" }
      ]
    },
    quizzes: [
      {
        id: "p-l-1",
        level: "low",
        text: "压强的国际单位是：",
        options: ["牛顿(N)", "帕斯卡(Pa)", "焦耳(J)", "瓦特(W)"],
        answer: 1,
        explanation: "压强的单位是帕斯卡(Pa)，1Pa = 1N/m²。"
      },
      {
        id: "p-l-2",
        level: "low",
        text: "下列实例中，为了增大压强的是：",
        options: ["书包带做得较宽", "图钉尖做得尖锐", "铁轨铺在路枕上", "载重汽车安装很多轮子"],
        answer: 1,
        explanation: "增大压强的方法：增大压力或减小受力面积。图钉尖减小了面积，增大了压强。"
      },
      {
        id: "p-l-3",
        level: "low",
        text: "最早证明大气压存在的著名实验是：",
        options: ["托里拆利实验", "马德堡半球实验", "奥斯特实验", "焦耳实验"],
        answer: 1,
        explanation: "马德堡半球实验有力地证明了大气压的存在且很大。托里拆利实验测出了大气压的值。"
      },
      {
        id: "p-m-1",
        level: "mid",
        text: "在深海中，潜水员必须穿上特制的潜水服，这是因为：",
        options: ["深海中水温太低", "深海中水压太大", "深海中没有氧气", "深海中光线太暗"],
        answer: 1,
        explanation: "液体压强随深度增加而增大，深海压强极大，必须保护。"
      },
      {
        id: "p-m-2",
        level: "mid",
        text: "关于液体压强，下列说法正确的是：",
        options: ["液体只对容器底部有压强", "液体压强只与液体的深度有关", "在同一深度，液体向各个方向的压强相等", "液体的质量越大，产生的压强越大"],
        answer: 2,
        explanation: "液体内部向各个方向都有压强。在同一深度，各方向压强相等。压强与密度和深度有关。"
      },
      {
        id: "p-m-3",
        level: "mid",
        text: "托里拆利实验中，如果将玻璃管倾斜，管内水银柱的：",
        options: ["长度不变，高度不变", "长度变长，高度不变", "长度变短，高度变大", "长度变长，高度变大"],
        answer: 1,
        explanation: "大气压支持的水银柱高度是由大气压决定的，与管的粗细、倾斜程度无关。倾斜时高度不变，长度变长。"
      },
      {
        id: "p-h-1",
        level: "high",
        text: "一个底面积为10cm²的容器，装入10N的水，水深10cm，则水对容器底部的压强是：(g=10N/kg)",
        options: ["1000Pa", "10000Pa", "100Pa", "10Pa"],
        answer: 0,
        explanation: "计算液体压强用 p = ρgh = 1000kg/m³ * 10N/kg * 0.1m = 1000Pa。"
      },
      {
        id: "p-h-2",
        level: "high",
        text: "下列现象中，不属于利用大气压的是：",
        options: ["用吸管吸饮料", "医生用注射器把药液注入肌肉", "吸盘挂钩吸在墙上", "活塞式抽水机抽水"],
        answer: 1,
        explanation: "注射药液是靠活塞的推力。吸饮料、吸盘、抽水机都是利用大气压。"
      },
      {
        id: "p-h-3",
        level: "high",
        text: "如图所示，两个底面积不同的圆柱形容器内分别盛有甲、乙两种液体，它们对容器底部的压强相等。若从两个容器中分别抽出相同高度的液体，则剩余液体对底部的压强p甲和p乙的关系是：",
        options: ["p甲 > p乙", "p甲 < p乙", "p甲 = p乙", "无法判断"],
        answer: 1,
        explanation: "初始 p = ρgh 相等。若 h甲 < h乙，则 ρ甲 > ρ乙。抽出相同高度 Δh，Δp = ρgΔh，因为 ρ甲 > ρ乙，所以 Δp甲 > Δp乙，剩余 p甲 < p乙。"
      }
    ]
  },
  {
    id: "buoyancy",
    title: "第十章：浮力",
    icon: "Waves",
    description: "人教版八年级下册第十章。研究浮力的产生、阿基米德原理及物体的浮沉条件。",
    content: {
      concepts: [
        { name: "浮力 (F浮)", definition: "浸在液体（或气体）里的物体受到液体（或气体）向上托的力。" },
        { name: "阿基米德原理", definition: "浸在液体里的物体受到向上的浮力，浮力的大小等于它排开的液体所受的重力。" },
        { name: "浮沉条件", definition: "F浮>G上浮；F浮=G悬浮或漂浮；F浮<G下沉。" }
      ],
      formulas: [
        { name: "阿基米德原理", formula: "F浮 = G排 = ρ液gV排", explanation: "ρ液-液体密度，V排-排开液体的体积。" }
      ],
      examples: [
        { question: "轮船为什么能浮在水面上？", answer: "轮船做成空心的，增大了排开水的体积，从而增大了浮力。" }
      ]
    },
    quizzes: [
      {
        id: "b-l-1",
        level: "low",
        text: "浮力的方向总是：",
        options: ["竖直向下", "竖直向上", "水平向左", "垂直向上"],
        answer: 1,
        explanation: "浮力的方向总是竖直向上的，与重力方向相反。"
      },
      {
        id: "b-l-2",
        level: "low",
        text: "浸在液体中的物体受到向上的浮力，浮力的大小等于：",
        options: ["物体的重力", "物体排开液体的重力", "物体的质量", "物体排开液体的体积"],
        answer: 1,
        explanation: "阿基米德原理：浸在液体里的物体受到向上的浮力，浮力的大小等于它排开的液体受到的重力。"
      },
      {
        id: "b-l-3",
        level: "low",
        text: "下列物体中，不受浮力的是：",
        options: ["在水中下沉的石块", "在空中上升的气球", "在水中航行的潜艇", "深埋在泥沙中的桥墩"],
        answer: 3,
        explanation: "浮力产生的原因是液体对物体上下表面的压力差。桥墩底部埋在泥沙中，没有向上的压力，所以不受浮力。"
      },
      {
        id: "b-m-1",
        level: "mid",
        text: "一个重5N的物体，放入水中静止时漂浮，则它受到的浮力为：",
        options: ["大于5N", "小于5N", "等于5N", "无法确定"],
        answer: 2,
        explanation: "物体漂浮或悬浮时，受到的浮力等于自身的重力。"
      },
      {
        id: "b-m-2",
        level: "mid",
        text: "关于浮力，下列说法正确的是：",
        options: ["物体排开液体的体积越大，浮力越大", "物体的体积越大，浮力越大", "物体没入液体越深，浮力越大", "物体的密度越大，浮力越大"],
        answer: 0,
        explanation: "F浮 = ρ液gV排。浮力只与液体的密度和排开液体的体积有关。"
      },
      {
        id: "b-m-3",
        level: "mid",
        text: "将一个重为4N的物体放入盛满水的溢水杯中，溢出3N的水，则物体受到的浮力是：",
        options: ["4N", "3N", "7N", "1N"],
        answer: 1,
        explanation: "根据阿基米德原理，F浮 = G排 = 3N。"
      },
      {
        id: "b-h-1",
        level: "high",
        text: "将一个体积为100cm³的实心球浸没在水中，它受到的浮力是：(g=10N/kg)",
        options: ["1N", "10N", "0.1N", "100N"],
        answer: 0,
        explanation: "F浮 = ρ水gV排 = 1000kg/m³ * 10N/kg * 100 * 10^-6m³ = 1N。"
      },
      {
        id: "b-h-2",
        level: "high",
        text: "潜水艇是通过改变____来实现上浮和下沉的。",
        options: ["自身的重力", "受到的浮力", "液体的密度", "排开液体的体积"],
        answer: 0,
        explanation: "潜水艇浸没在水中，浮力不变。通过水舱充水或排水改变自身重力来实现浮沉。"
      },
      {
        id: "b-h-3",
        level: "high",
        text: "一艘轮船从河里驶入海里，它受到的浮力F和排开液体的体积V的变化情况是：",
        options: ["F变大，V变小", "F不变，V变小", "F不变，V变大", "F变小，V变大"],
        answer: 1,
        explanation: "轮船始终漂浮，F浮 = G，所以浮力不变。因为海水的密度大于河水，由 F浮 = ρ液gV排 可知，V排变小。"
      }
    ]
  },
  {
    id: "ohm-law",
    title: "第十七章：欧姆定律",
    icon: "Zap",
    description: "人教版九年级第十七章。研究电流、电压和电阻的定量关系。",
    content: {
      concepts: [
        { name: "欧姆定律", definition: "导体中的电流，跟导体两端的电压成正比，跟导体的电阻成反比。" },
        { name: "伏安法测电阻", definition: "利用电压表和电流表测量电阻的方法。" }
      ],
      formulas: [
        { name: "欧姆定律", formula: "I = U / R", explanation: "I-电流(A)，U-电压(V)，R-电阻(Ω)。" }
      ],
      examples: [
        { question: "一个10Ω的电阻接在3V电源上，电流是多少？", answer: "I = U / R = 3V / 10Ω = 0.3A。" }
      ]
    },
    quizzes: [
      {
        id: "o-l-1",
        level: "low",
        text: "欧姆定律的数学表达式是：",
        options: ["U = IR", "I = U / R", "R = U / I", "P = UI"],
        answer: 1,
        explanation: "欧姆定律的标准表达式是 I = U / R，表示电流与电压成正比，与电阻成反比。"
      },
      {
        id: "o-l-2",
        level: "low",
        text: "下列物理量中，其大小不随电压和电流变化而变化的是：",
        options: ["电流", "电压", "电阻", "电功率"],
        answer: 2,
        explanation: "电阻是导体本身的一种性质，由导体的材料、长度、横截面积和温度决定，与电压、电流无关。"
      },
      {
        id: "o-l-3",
        level: "low",
        text: "在伏安法测电阻的实验中，电压表应____在待测电阻两端，电流表应____在电路中。",
        options: ["串联，并联", "并联，串联", "并联，并联", "串联，串联"],
        answer: 1,
        explanation: "电压表测量电压需并联；电流表测量电流需串联。"
      },
      {
        id: "o-m-1",
        level: "mid",
        text: "两个电阻R1=10Ω, R2=20Ω串联，总电阻为：",
        options: ["10Ω", "20Ω", "30Ω", "6.7Ω"],
        answer: 2,
        explanation: "串联电路总电阻等于各分电阻之和。R = 10 + 20 = 30Ω。"
      },
      {
        id: "o-m-2",
        level: "mid",
        text: "关于滑动变阻器，下列说法正确的是：",
        options: ["它能改变电路中的电流", "它能改变导体的电阻率", "它必须并联在电路中", "实验开始前，滑片应放在阻值最小处"],
        answer: 0,
        explanation: "滑动变阻器通过改变接入电路的电阻线长度来改变电阻，从而改变电流。实验前应置于最大阻值处保护电路。"
      },
      {
        id: "o-m-3",
        level: "mid",
        text: "一段导体两端电压为3V时，电流为0.6A；若电压变为6V，则导体的电阻为：",
        options: ["5Ω", "10Ω", "0.2Ω", "1.2Ω"],
        answer: 0,
        explanation: "R = U/I = 3V / 0.6A = 5Ω。电阻不变，电压变大后电阻仍为5Ω。"
      },
      {
        id: "o-h-1",
        level: "high",
        text: "电源电压6V保持不变，R1=10Ω，滑动变阻器R2最大阻值20Ω，当滑片P从左端（R2=0）移到右端时，电压表（并联在R1两端）示数变化范围是：",
        options: ["0-6V", "2-6V", "0-2V", "2-4V"],
        answer: 1,
        explanation: "滑片在左端：R2=0，V=6V。滑片在右端：R总=30Ω，I=6/30=0.2A，V1=0.2*10=2V。范围为2-6V。"
      },
      {
        id: "o-h-2",
        level: "high",
        text: "在如图所示的电路中，电源电压保持不变。闭合开关S，当滑动变阻器的滑片P向右移动时，电流表和电压表的示数变化情况是：",
        options: ["电流表示数变大，电压表示数变大", "电流表示数变小，电压表示数变小", "电流表示数变小，电压表示数变大", "电流表示数变大，电压表示数变小"],
        answer: 1,
        explanation: "滑片向右移，电阻变大，总电流变小（电流表示数变小）。根据 U=IR，定值电阻两端电压变小（电压表示数变小）。"
      },
      {
        id: "o-h-3",
        level: "high",
        text: "将R1=10Ω和R2=20Ω两个电阻并联接在电源上，通过它们的电流之比I1:I2为：",
        options: ["1:2", "2:1", "1:1", "4:1"],
        answer: 1,
        explanation: "并联电路电压相等。根据 I=U/R，电流与电阻成反比。I1/I2 = R2/R1 = 20/10 = 2:1。"
      }
    ]
  }
];

