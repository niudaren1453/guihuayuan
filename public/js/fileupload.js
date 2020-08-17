// 定义一个二维数组用来存储第二级的列表信息
var stus = new Array()
stus[1] = new Array('委托书,中标通知书,纪要', '合同')
stus[2] = new Array('上位规划', '测绘', '勘察', '提资CAD(总平及红线等)')
stus[3] = new Array('现场照片')
stus[4] = new Array('方案', '项目建议书,工可', '初步设计', '施工图设计', '变更设计')
stus[5] = new Array('方案,工可批复', '初设批复', '施工图合格证书')
stus[6] = new Array('会议纪要', '往来函件', '工作联系单,洽商单')
stus[7] = new Array('中间验收记录', '竣工验收报告')
stus[8] = new Array('更多')
// 实现onchange事件
function Cname(val) {
    // 找到第二级的列表id
    var hobby = document.getElementById('hobby')
    // 每次调用onchange事件的时候要清空第二级的列表内容,否则会出现内容错乱
    hobby.options.length = 0

    for (var i = 0; i < stus.length; i++) {
        // 将第一级的下标与数组第一级的下标进行对比
        if (val == i) {
            // 找到对应下标后进行赋值操作
            for (var j = 0; j < stus[i].length; j++) {
                // 创建一个文本节点,用来存储列表第二级的内容,实际开发应该是用数据库存储
                var textNode = document.createTextNode(stus[i][j])
                // 创建一个标签节点
                var opEle = document.createElement('option')
                // 将标签节点包裹文本节点
                opEle.appendChild(textNode)
                // 将第二级父节点包裹标签子节点
                hobby.appendChild(opEle)
            }
        }
    }
}