@CLS
@ECHO off

SET serverHost={serverHost}
SET httpPort={httpPort}
SET wltpPort={wltpPort}
SET windowTitle="Bizeyes REAL TIME MONITORING SYSTEM"
SET windowSize=auto
SET startupTemplate="Site"
SET updateFrequency=2000
SET reconnectionDelay=15000
SET errors=3

SET staticJarPath={staticJarPath}
SET CLASSPATH=%staticJarPath%\sielcowebclientapp.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\httpfilegetter.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\safecomclient.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\winlogtcpclient.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\winlogwebclient.jar
SET CLASSPATH=%CLASSPATH%;.\imageresources.jar
SET CLASSPATH=%CLASSPATH%;.\templates.jar
SET CLASSPATH=%CLASSPATH%;.\customfonts.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\winlogprintfwrapper.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\junit.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\jdom.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\jcommon-1.0.21.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\jfreechart-1.0.17.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\javaws.jar
SET CLASSPATH=%CLASSPATH%;%staticJarPath%\log4j-1.2.15.jar

ECHO Running WEB CLIENT - Server %serverHost%:%httpPort% / %serverHost%:%wltpPort%
JAVA -Xms64m -Xmx512m it.grgmeda.sielco.winlog.webclient.AppClientCore 0 %serverHost% %httpPort% %wltpPort% %windowTitle% %windowSize% %startupTemplate% %updateFrequency% %reconnectionDelay% %errors%
PAUSE
