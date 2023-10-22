// i did use a function i found online for the getBaseLog. i got it from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log


function mergesort(a) {
    s = 0
    m = 0
    g = 0
    //outer for loop for saying how many items there are going to be in the set we want to edit
    for (j = 1; j <= Math.ceil(getBaseLog(2, a.length)); j++){
        //this loop is for saying where we should start for the set of items we want to change
        for(k=0; k < a.length/(2**j); k++){
            //this loop is for the comparison of the items we want to change
            for (i = k*(2**j); i < (k+1)*(2**j)-1; i++){
                //this if statment is for comparing items, making sure what we compare is defined, making sure we
                //dont have i be greater than the comparison, and making sure we only use half of the items in a set
                if(a[i] > a[i+(2**(j-1))-m] && a[i+(2**(j-1))-m] != undefined && i < i+(2**(j-1))-m && g < j){
                    s = a[i+(2**(j-1))-m]
                    //this loop is for moving the items from whatever position its currently in
                    for(p = 0; p < 2**(j-1)-m; p++){
                        a[i+(2**(j-1))-m-p] = a[i+(2**(j-1))-m-p-1]
                    }
                    a[i] = s
                    g++
                }
                //the m is for making sure the next comparison is a diffrent number each time.
                else{
                    m++
                }
            }
            m = 0
            g = 0
        }
    }
    return a;
}


function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }