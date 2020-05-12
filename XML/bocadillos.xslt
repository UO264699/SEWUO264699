<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="bocadillos">
  <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
    <html lang ="es">

      <head>
        <title>Bocadillos</title>
      </head>

      <body>

        <h1> Bocadillos </h1>

        <div class ="contenedorBody">


          <xsl:for-each select ="bocadillo">

            <div class ="nombre">

            <h2>
              <xsl:value-of select="@nombre"/>
            </h2>

              <div class =" foto">

                <xsl:for-each select ="imagen">
              <img>

                <xsl:attribute name = "src">
                  <xsl:value-of select="@src"/>
                </xsl:attribute>

                <xsl:attribute name = "alt">
                  <xsl:value-of select="@alt"/>
                </xsl:attribute>
                

              </img>
                </xsl:for-each >

                  <div class="ingredientes">

                    <h3>Ingredientes</h3>

                    <xsl:for-each select ="ingrediente">

                      <xsl:value-of select="@nombre"/>
                      
                    </xsl:for-each>
               
                </div>

                <div class="nutricion">

                  <h4>Nutricion</h4>


                  <p>
                    <xsl:value-of select="porcion"/>
                    <xsl:value-of select="@unidad"/>
                  </p>

                  <p>
                    <xsl:value-of select="calorias"/>
                    <xsl:value-of select="@unidad"/>
                  </p>

                  <p>
                    <xsl:value-of select="colesterol"/>
                    <xsl:value-of select="@unidad"/>
                  </p>

                  <p>
                    <xsl:value-of select="grasaTotal"/>
                    <xsl:value-of select="@unidad"/>
                  </p>

                  <p>
                    <xsl:value-of select="carbohidratos"/>
                    <xsl:value-of select="@unidad"/>
                  </p>

                  <p>
                    <xsl:value-of select="azucares"/>
                    <xsl:value-of select="@unidad"/>
                  </p>

                  <p>
                    <xsl:value-of select="proteinas"/>
                    <xsl:value-of select="@unidad"/>
                  </p>
 

                </div>
                
              </div>


            </div>
          </xsl:for-each>
          
          
        </div>
        
      </body>
      
    </html>
    
       
    </xsl:template>
</xsl:stylesheet>
