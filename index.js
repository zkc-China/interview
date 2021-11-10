
/**
 * 
 * @param {*} array 
 * @returns 
 * 
 * 一个数组去重，并按照出现次数排序
 * 
 */
 function arrayTo(array) {
    var m = new Map();
    for (var i = 0; i < array.length; i++) {
      if (m.has(array[i])) {
        m.set(array[i], m.get(array[i]) + 1);
      } else {
        m.set(array[i], 1)
      }
    }
    var arr = [];
    for (let [key, value] of m) {
      arr.push({
        number: key,
        count: value
      })
    }
    var result = arr.sort((a, b) =>
      b.count - a.count
    ).map(item => item.number);
    return result;
  }
  console.log(arrayTo([5, 6, 1, 2, 3, 4, 3, 2, 7, 1, 2, 3, 4]))
  
  /**
   * 
   * @param {*} index 
   * @returns 
   * 
   * 按照index输入前斐波那契数列，0 1 1 2 3 5 8 13...
   * 
   */
  function bo(index) {
    var array = [0, 1];
    for (let i = 1; i <= index; i++) {
      array.push(array[i] + array[i - 1]);
    }
    return array.join('、');
  }
  console.log(bo(20))
  
  /**
   * 
   * o有两个方法
   * setInter（fn,a,b） 在a，a+b，a+2b，a+3b秒数后执行fn方法
   * clear   停止setInter方法
   * 
   */
  class o {
    constructor() {
      this.status = true;
      this.first = true;
    }
    setInter(fn, a, b) {
      if (this.first) {
        this.first = false;
        setTimeout(() => {
          fn()
          if (this.status) {
            this.setInter(fn, a, b)
          } else {
            return
          }
        }, a)
      } else {
        setTimeout(() => {
          fn()
          if (this.status) {
            this.setInter(fn, a, b)
          } else {
            return
          }
        }, b)
      }
  
    }
    clear() {
      return this.status = false;
    }
  }
  
  var log = function () {
    console.log('log' + new Date())
  }
  
  var itemO = new o();
  itemO.setInter(log, 1000, 5000)
  setTimeout(() => {
    itemO.clear();
  }, 20000)
  