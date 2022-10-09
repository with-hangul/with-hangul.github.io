class Line {
  constructor(points, changable = 'changable') {
    this.points = points
    this.changable = changable
    this.type = 'straight'
  }

  drawWaveLine(ctx, points, frame) {
    function percentX(value) {
      return value.x*ctx.canvas.width/100
    }
    function percentY(value) {
      return value.y*ctx.canvas.height/100
    }
    const p1 = points[0]
    const p2 = points[1]
    function getAtan2(dotA, dotB) {
      return Math.atan2(
        percentY(dotB) - percentY(dotA),
        percentX(dotB) - percentX(dotA)
      )
    }

    let angle = getAtan2(p1, p2)

    const ax = percentX(p1)
    const bx = percentX(p2)
    const ay = percentY(p1)
    const by = percentY(p2)
    
    ctx.moveTo(percentX(p1), percentY(p1))
    ctx.beginPath()

    const RADI_90 = (90 * Math.PI) / 180
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    const cnt = 50
    const size = ctx.canvas.width/100
    const frequency = 0.4
    for(let i = 1; i < cnt; i++) {
      const x1 = ax*(i/cnt)+bx*(cnt-i)/cnt + Math.sin(angle) * Math.sin(i * frequency+ (frame%1200)/100) * size
      const y1 = ay*(i/cnt)+by*(cnt-i)/cnt - Math.cos(angle) * Math.sin(i * frequency+ (frame%1200)/100) * size
      ctx.lineTo(x1, y1)
    }
    ctx.stroke()
  }

  drawSelf(ctx, frame){
    function percentX(value) {
      return value.x*ctx.canvas.width/100
    }
    function percentY(value) {
      return value.y*ctx.canvas.height/100
    }
    if(this.type === 'straight') {
      ctx.lineCap = 'butt'
    ctx.beginPath()
    for(let i = 0; i < this.points.length; i++) {
      const point = this.points[i]
      if(i === 0) ctx.moveTo(percentX(point), percentY(point))
      else ctx.lineTo(percentX(point), percentY(point))
    }
    ctx.stroke()
  }else if(this.type === 'wave') {
    this.drawWaveLine(ctx, this.points, frame)
    ctx.stroke()
  }

  }

  setType(type) {
    if(this.changable === 'changable') this.type = type
  }
}

export default Line