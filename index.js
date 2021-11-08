var luas;
var keliling;
var lebar;
var panjang;
function hitung() {
	lebar = parseFloat(document.getElementById("input_lebar").value);
	panjang = parseFloat(document.getElementById("input_panjang").value);
	luas = panjang * lebar;
	keliling = 2 * (panjang + lebar);
	document.getElementById('opt_luas').value = luas;
	document.getElementById('opt_keliling').value = keliling;
}
