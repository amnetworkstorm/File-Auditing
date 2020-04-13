# File-Auditing

1.Download Apache Tomcat

	https://mirrors.estointernet.in/apache/tomcat/tomcat-7/v7.0.103/bin/apache-tomcat-7.0.103-windows-x64.zip (64 bit)
	
	https://mirrors.estointernet.in/apache/tomcat/tomcat-7/v7.0.103/bin/apache-tomcat-7.0.103-windows-x86.zip (32 bit)

	Extract the zip.Rename the folder as Apache


2.Download PostgresSQL

     https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

	Install postgressql and Remember the port number,username,password

3.Download Java 8

	https://www.azul.com/downloads/zulu-community/?architecture=x86-64-bit&package=jdk

	Install Java 8

4.Clone/Download this project

	Do the following steps
	1.copy the file amsfile.bat under bin folder to Apache/bin 
    2.copy the folders under conf directory to Apache/conf
    3.copy the folder amswindows to Apache/webapps
    4.copy the product_jar folder to Apache/lib
    5.go to Apache/conf/db folder.edit db_connection.conf file 
	  and change port number,username,password(the one you gave while installing postgressql)
	6.open command prompt with run as administrator and go to Apache/bin folder in command prompt and run amsfile.bat
