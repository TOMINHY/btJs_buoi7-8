/**
 * Author: To Minh Y
 * Funtion: Bài tập về mảng
 * Release: 16/07/2022
 */
// Thêm số
var nums = [];
console.log(nums);
function themSo() {
    var n = Number(document.querySelector("#num").value);
    nums.push(n);
    document.getElementById("result").innerHTML = nums;
}
document.getElementById("btnThem").onclick = themSo;

// Tính tổng số dương
function tinhTongSoDuong() {
    var sum = 0;
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] > 0) {
            sum += nums[i];
        }
    }
    document.getElementById("result1").innerHTML = 'Tổng số dương    ' + sum;
}
document.getElementById("btnTinhTong").onclick = tinhTongSoDuong;

// Đếm số dương
function demSoDuong() {
    var count = 0;
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] >= 0) {
            count++;
        }
    }
    document.getElementById("result2").innerHTML = 'Số dương:  ' + count;
}
document.getElementById("btnDemSo").onclick = demSoDuong;

// Tìm số nhỏ nhất
function timMin() {
    // giả xử số đầu tiên = min 
    var min = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    document.querySelector('#result3').innerHTML = 'Số nhỏ nhất: ' + min;
}
document.querySelector("#btnTimMin").onclick = timMin;

// Tím số dương nhỏ nhất
function timSoDuongNhoNhat() {
    var nums2 = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            nums2.push(nums[i]);
        } else {
            min = 'Mảng không có phần tử dương!';
        }
    }
    var min = nums2[0];
    for (var j = 0; j < nums2.length; j++) {
        if (nums2[j] < min) {
            min = nums2[j];
        }
    }
    document.querySelector('#result4').innerHTML = 'Số dương nhỏ nhất: ' + min;
}
document.querySelector('#btnTimSoDuongNhoNhat').onclick = timSoDuongNhoNhat;

// Tìm số chẵn cuối cùng
/**
 * Tạo biến chưa số dương cuối cùng
 * Xét từ cuối mảng -> đầu mảng nếu tìm được số chẵn nào thì gán giá trị cho soChanCuoi
 * Break để thoát khỏi vòng lặp để lấy đc giá trị chẵn cuối cùng 
 */
function timSoChanCuoiCung() {
    var nums2 = [];
    for (var i = 0; i < nums.length; i++) {
        nums2.push(nums[i])
    }
    var soChanCuoi = "";
    for (var i = nums2.length - 1; i >= 0; i--) {
        if (nums2[i] % 2 == 0) {
            soChanCuoi = nums2[i];
            break;
        } else {
            soChanCuoi = "Mảng không có số chẵn!"
        }
    }
    document.querySelector('#result5').innerHTML = soChanCuoi;
}
document.querySelector('#btnTimSoChan').onclick = timSoChanCuoiCung;

// Đổi chỗ 

var hoanDoi = document.querySelector('#btnDoiCho');
var bReset = document.querySelector('#btnReset');
hoanDoi.addEventListener('click',function (){
    doiCho();
    hoanDoi.style.display = "none";
    bReset.style.display = "block";
});
bReset.addEventListener('click', function(){
    reset();
    hoanDoi.style.display = "block";
    bReset.style.display = "none";
});

function doiCho() {
    var nums2 = [];
    for (var i = 0; i < nums.length; i++) {
        nums2.push(nums[i])
    }
    for (var i = 0; i < nums2.length-1; i++) {
        var viTri1 = Number(document.querySelector('#index1').value);
        var viTri2 = Number(document.querySelector('#index2').value);
        var temp = nums2[viTri1]
        nums2[viTri1] = nums2[viTri2];
        nums2[viTri2] = temp;
    }
    document.querySelector('#result6').innerHTML = 'Mảng sau khi đổi: ' + nums2;
}

function reset(){
    var nums2 = [];
    for (var i = 0; i < nums.length; i++) {
        nums2.push(nums[i])
    }
    document.querySelector('#result6').innerHTML =  'Mảng sau khi đổi: ' + nums2;
}

// Sắp xếp tâng dần
function sapXepTangDan(){
    var nums2 = []
    for(var i = 0 ; i < nums.length; i++){
        nums2.push(nums[i])
    }
    for(var i = 0 ; i < nums2.length -1 ; i ++){
        for(var j = 0 ; j < nums2.length; j++){
            if(nums2[j] > nums2[j+1]){
                var temp = nums2[j];
                nums2[j] = nums2[j+1];
                nums2[j+1] = temp;
            }
        }
    }
   document.querySelector('#result7').innerHTML = 'Mảng sau khi sắp xếp: ' +nums2;
}
document.querySelector('#btnSapXep').onclick = sapXepTangDan;

// Tìm số nguyên tố đầu tiên
function checkSNT(number) {
    if (number <= 1){
       return 0
    }
    for(var j = 2 ; j <= Math.sqrt(number) ; j++){
        if(number % j == 0){
            return 0
        }
    }
    return 1;
}
function timSoNguyenToDauTien() {
    var soNTTien = 0;
    for(var i = 0 ; i <= nums.length;i++){
        
        if(checkSNT(nums[i])){
            soNTTien = nums[i];
            break;
        }else{
            soNTTien = -1;
        }
    }
  document.querySelector('#result8').innerHTML = soNTTien;
}
document.querySelector('#btnSoNguyenToDauTien').onclick = timSoNguyenToDauTien;

// Đếm số nguyên
function themSo1() {
    var n = Number(document.querySelector("#num1").value);
    nums.push(n);
    document.getElementById("result9").innerHTML = nums;
}
document.getElementById("btnThem1").onclick = themSo1;

function demSoNguyen() {
    
    var countSoNguyen = 0;
    for(var i = 0; i < nums.length ; i++){
        if(Number.isInteger(nums[i])){
            countSoNguyen++;
        }
    }
    document.querySelector('#result10').innerHTML = 'Số nguyên : ' + countSoNguyen;
}
document.querySelector('#btnDemSoNguyen').onclick = demSoNguyen;

// So sánh số lượng số âm và dương
function soSanhAmVaDuong() {
    var countDuong = 0;
    var countAm = 0
    var content = '';
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] >= 0) {
            countDuong++;
        }else if( nums[i] < 0){
            countAm++;
        }
    }
    if(countDuong > countAm){
        content = 'Số dương ' + '>' + ' Số âm';
    }else if(countDuong < countAm){
        content = 'Số âm ' + '>' + ' Số dương';
    }else{
        content = 'Số dương ' + '=' + ' Số âm';
    }
    document.querySelector('#result11').innerHTML = content;
}
document.querySelector('#btnSoSanh').onclick = soSanhAmVaDuong;



