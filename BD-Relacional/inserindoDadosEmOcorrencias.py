import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

endereco = "C:\\Users\\Henrique\\Downloads\\BD_Ocorrencias\\"

dp = pd.read_csv(endereco + "DP.csv" , sep= ",")
rensposalvelDP = pd.read_excel(endereco + "ResponsavelDp.xlsx")
municipio = pd.read_csv(endereco + "Municipio.csv", sep = ",")
ocorrencias = pd.read_excel(endereco + "ocorrencias.xlsx")

tbDP = pd.DataFrame(dp)
tdResponsavel = pd.DataFrame(rensposalvelDP)
tbMunicipior = pd.DataFrame(municipio)
tbOcorrencias = pd.DataFrame(ocorrencias)

engine = sa.create_engine("sqlite:///C://Users//Henrique//Documents//Pós//codigo-da-aula//Pós-Graduaçao//Nova Pasta//C-digo-portif-lio-PUC//BD-Relacional/ocorrencias.db")

conn = engine.connect()
metadata = sa.schema.MetaData(engine)

sessao = orm.sessionmaker(bind = engine)

sesssao = sessao()

#DP
DadosDP = tbDP.to_dict(orient = "records")
tabela_DP = sa.Table(oc.dp.__tablename__, metadata, autoload = True)

try: 
    conn.execute(tabela_DP.insert(), DadosDP)
    sessao.commit()
except ValueError:
    ValueError()
    

#ResponsavelDP

DadosRespDP = tbResponsavel.to_dict(orient = "records")
tabela_RespDP = sa.Table(oc.responsaveldp.__tablename__, metadata, autoload = True)

try: 
    conn.execute(tabela_RespDP.insert(), DadosRespDP)
    sessao.commit()
except ValueError:
    ValueError()

#Municipio

DadosMunicipio = municipio.to_dict(orient = "records")
tabela_municipio= sa.Table(oc.tbMunicipio.__tablename__, metadata, autoload = True)

try: 
    conn.execute(tabela_municipio.insert(), DadosMunicipio)
    sessao.commit()
except ValueError:
    ValueError()
    
#Ocorrencias

DadosOcorrencias = tbOcorrencias.to_dict(orient = "records")
tabela_ocorrencias= sa.Table(oc.correncias.__tablename__, metadata, autoload = True)

try: 
    conn.execute(tabela_ocorrencias.insert(), DadosOcorrencias)
    sessao.commit()
except ValueError:
    ValueError()

sessao.close_all()