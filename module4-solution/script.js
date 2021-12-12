var names=new Array();
names[0]="Ben";
names[1]="Andrew";
names[2]="Jhon";
names[3]="Priya";
names[4]="Swaroopa";
names[5]="Yaakov";
names[6]="Jen";
names[7]="jimin";
names[8]="Suman";
names[9]="jim";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
         console.log("Goodbye "+ names[i]);
	}
	else{
		 console.log("Hello "+ names[i]);
	}
}