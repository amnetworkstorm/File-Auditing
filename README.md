# File-Auditing

1.Download Apache Tomcat

	http://mirrors.estointernet.in/apache/tomcat/tomcat-7/v7.0.96/bin/apache-tomcat-7.0.96-windows-x64.zip

	Extract the zip.Rename the folder as Apache


2.Download PostgresSQL

	https://www.enterprisedb.com/thank-you-downloading-postgresql?anid=1256752

	Install postgressql.**Remember the port number,username,password**

3.Download Java 8

	https://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html

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
