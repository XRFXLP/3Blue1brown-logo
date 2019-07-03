/** Shades are named in decreasing order of their apparent height, they are 
 triangles in essence **/
float r1 = 132,r2=200; //Shade 1
float r3 = 98 ,r4 = 165 ; //Shade2
float r5 = 98,r6 = 195*0.75 ; //Shade3
float r7 = 98,r8 = 130 ; //Shade4

//brown coloration have been achieved by fitting upward downward triangle in circular sector
float rb1=00,rb2=200; //for brown color

// s's are often used here as shift, f's as zoom, tv is used as incrementation for t1, just as theta_vel1 is for theta
float f=0.7,s=0.015,s1 = 0.023,f2=0.6,f1 = 0.9,s2=0.34;
float theta = 0, theta_vel1 = 2*3.14/28,t1 = 3.14,tv = 0.05;

//tunnnnn like a sound of bell is a sign to finish a particular subsection of program and to start next subsection, in a way, it divides the whole program into few components
//Count is a varaible just to count the petals to make certain condition to satisfy as intended, and to avoid the overlapping between different drawings
int count = 1,tunnnnn = 0;

//n measures of base of triangles used in filling and to color the brown color.
float n = 0.052;


void setup()
{
  size(800,800);
  background(255);
  translate(400,400);
  strokeWeight(10);
  fill(115,192,227);
  noStroke();
  ellipse(0,0,400,400);
  
  frameRate(10);
}


void draw()
{ 
  translate(400,400);
  if(tunnnnn  == 0)
 { 
   // I have used -6.28/28 to avoid overlaps
    if(theta < 6.28 - 6.28/28 && count < 29)
    { 
      noStroke();
      //shade 1
      fill(75,144,164);
      triangle(r3*cos(theta + s2 - 0.113),r3*sin(theta + s2 - 0.113),r3*cos(theta + 0.113 + s2),r3*sin(theta + 0.113 + s2),r4*cos(theta  + s2),r4*sin(theta + s2));
      count++;
    }
    
    
    
   if(count == 29)
   {
     fill(63,100,120);
     noStroke();
     ellipse(0,0,266,266);
     fill(0);
     ellipse(0,0,200,200);
   }
   
   
  
   if(theta >= 6.28 - 6.28/28 && theta < 12.56) 
   { 
      //shade2
     fill(63,100,120);
     triangle(r1*cos(theta + 0.110),r1*sin(theta + 0.110),r1*cos(theta - 0.110),r1*sin(theta - 0.110),r2*cos(theta ),r2*sin(theta ));
     count++;
   }
  
  
  if(theta >= 12.26 && theta < 6.28*3)
  {
     fill(32,74,90);
     triangle(r5*cos(theta + s - 0.112),r5*sin(theta +s - 0.112),r5*cos(theta + s + 0.112),r5*sin(theta + s + 0.112),r6*cos(theta + s),r6*sin(theta + s));
  }
  
   theta += theta_vel1;
  if(theta > 4*6.28)
  {
    tunnnnn = 1;
    theta = 0;
  }
 }
 
 if(tunnnnn == 1)
 {
    while(true)
    { 
      if(t1 >= 3.14 && t1 <= 4.72)
      {
        float x = rb1*cos(t1), x1 = rb2*cos(t1),x3 = rb2*cos(t1 + n),y = rb1*sin(t1),y1 = rb2*sin(t1),y3 = rb2*sin(t1 + n);
        fill(134,84,45,200);
        strokeWeight(8);
        triangle(x,y,x1,y1,x3,y3);
        t1 += tv;
      }
      else
      {
        break;
      }
    }
    tunnnnn = 2;
 }
 
 
 if(tunnnnn == 2)
 {
   fill(0);
   ellipse(0,0,200,200);
   // tunnnnn ++;
   if(theta < 6.28 - 6.28/28)
   {  
     fill(0);
     triangle(r7*cos(theta + s1 - 0.045),r7*sin(theta +s1 - 0.045),r7*cos(theta + s1 + 0.045),r7*sin(theta + s1 + 0.045),r8*f1*cos(theta + s1),r8*f1*sin(theta + s1));
   }
   theta += theta_vel1;
   if(theta >= 6.28 - 6.28/28)
   {
      tunnnnn = 3;
   }
 }
 
 if(tunnnnn == 3)
 {
   rotate(100);
 }
}
