document.getElementById("calc").onclick = function calculate() {
    let inflation = {
        '1970':'0,0',
        '1971':'0,6',
        '1972':'0,0',
        '1973':'0,7',
        '1974':'1,1',
        '1975':'0,2',
        '1976':'0,6',
        '1977':'0,6',
        '1978':'1,6',
        '1979':'2,0',
        '1980':'2,1',
        '1981':'3,1',
        '1982':'17,8',
        '1983':'4,1',
        '1984':'1,1',
        '1985':'0,8',
        '1986':'1,0',
        '1987':'0,9',
        '1988':'2,2',
        '1989':'1,1',
        '1990':'5,1',
        '1991':'170,2',
        '1992':'210,4',
        '1993':'256,1',
        '1994':'136,7',
        '1995':'32,3',
        '1996':'38,8',
        '1997':'154,8',
        '1998':'59,1',
        '1999':'45,8',
        '2000':'45,7',
        '2001':'34,5',
        '2002':'22,5',
        '2003':'15,3',
        '2004':'11,9',
        '2005':'9,0',
        '2006':'6,6',
        '2007':'4,8',
        '2008':'7,9',
        '2009':'5,6',
        '2010':'6,1',
        '2011':'5,8',
        '2012':'3,3',
        '2013':'4,0',
        '2014':'1,1',
        '2015':'-0,6',
        '2016':'-1,5',
        '2017':'1,3',
        '2018':'4,6',
        '2019':'3,8',
        '2020':'2,6' }
    let sum = parseFloat(document.getElementById("old-sum").value);
    let old = parseInt(document.getElementById("old-year").value);
    let nw = parseInt(document.getElementById("new-year").value);
    for (i = old; i < nw; i++) {
        sum += ((parseFloat(inflation[i])/100) * sum);
        console.log(sum);
    }

    if (old < 2007 && nw > 2007) {
        let new_sum = sum / 10000;
        new_sum = parseFloat(new_sum).toFixed(2);
        document.getElementById('lei-noi').value = new_sum + " lei noi";
    }

    sum = parseFloat(sum).toFixed(2);

    document.getElementById("new-sum").value = sum + " lei vechi";
};