function calcAreaGrade(diemKhuVuc) {
  if (diemKhuVuc == "a") {
    return 2;
  }
  if (diemKhuVuc == "b") {
    return 1;
  }
  if (diemKhuVuc == "c") {
    return 0.5;
  }
  return 0;
}

function calcObjGrade(diemDoiTuong) {
  if (diemDoiTuong == 1) {
    return 2.5;
  }
  if (diemKhuVuc == 2) {
    return 1.5;
  }
  if (diemKhuVuc == 3) {
    return 1;
  }
  return 0;
}

function ex1() {
  //Bai 1:
  /**
   * Input: diem chuan hoi dong, diem 3 mon thi thi sinh ,diemkhuvuc(a,b,c,x),diemdoituong= (1,2,3,0)(e,f,g,h)
   *Process:
   1.Lay input
   2.Tinh diem uu tien theo khu vuc;
   3.Tinh diem uu tien theo doi tuong;
   4.Tinh tong diem = diem 3 mon thi + diemuutien(khu vuc+doi tuong)
   5.kiem tra ket qua;
   * Output:Tong diem dat dc + kq dau hay rot??
   */
  var math = 9,
    literature = 8,
    english = 7;
  var diemHoiDong = 28;
  var diemKhuVuc = "a";
  var diemDoiTuong = 1;
  var Kq = "";
  var areaGrade = 0;
  var objGrade = 0;

  //   Tinh diem khu vuc
  areaGrade = calcAreaGrade(diemKhuVuc);

  //   Tinh diem doi tuong
  objGrade = calcObjGrade(diemDoiTuong);

  var sum = math + literature + english + areaGrade + objGrade;
  if (sum >= diemHoiDong && math != 0 && literature != 0 && english != 0) {
    console.log("Thi sinh da dau", Kq);
  } else {
    console.log("Thi sinh rot", Kq);
  }
  console.log("Thi sinh co tong diem = " + sum);
  console.log(Kq);
}

function ex2() {
  /**
   * Input: ten ,so Kw =
   * Process:
   * 1.Nhap so Kw,ten 
   * 2.50kw = 500d/1kw
   * 3.50kw ke= 650d/kw
   *4.100kw ke= 850d/1kw
   *5.150kw ke = 1100d/kw
   6. >150kw = 1300d/kw
   * Output:Tinh tien 
   */
  var names = "Cuong";
  var kw = 360;
  var money = 0;
  if (kw <= 50) {
    money = kw * 500;
  } else if (kw <= 100) {
    money = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    money = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    money = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 150) * 1100;
  } else {
    money = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  console.log(money);
}

