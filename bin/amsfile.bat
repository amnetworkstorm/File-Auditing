
set SERVER_HOME=%~dp0%~1\..

SET JAVA="%JAVA_HOME%\java"

set CLASS_PATH=%SERVER_HOME%\lib\*;%SERVER_HOME%\lib\product_jar\*;

set JAVA_OPTS= -Dcatalina.home="%SERVER_HOME%" -Dhome="%SERVER_HOME%" -Dproduct_start="com.ams.log.start.StartProduct" -Dfile.encoding=UTF-8 -Djava.library.path="%SERVER_HOME%\lib\product_jar"

echo %CLASS_PATH%

echo %JAVA_OPTS%

%JAVA% -XX:+HeapDumpOnOutOfMemoryError -cp %CLASS_PATH% %JAVA_OPTS% com.ams.log.start.AMSProduct
