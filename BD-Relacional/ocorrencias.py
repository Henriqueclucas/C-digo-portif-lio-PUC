import sqlalchemy as sa
import sqlalchemy.orm as orm
import os 


engine = sa.create_engine("sqlite:///Pós-Graduaçao//Nova Pasta//C-digo-portif-lio-PUC//BD-Relacional/ocorrencias.db", echo=True)

base = orm.declarative_base()

class tbDP(base):
    __tablename__ = "tbDP"
    
    codDP = sa.Column(sa.INTEGER, primary_key = True, index = True , nullable = False)
    nome = sa.Column(sa.VARCHAR(100), nullable = False)
    endereco = sa.Column(sa.VARCHAR(100), nullable = False)
    

class tbResposavel(base):
    __tablename__ = "tbResponsabel"
    
    codDP = sa.Column(sa.INTEGER, primary_key = True, index = True, nullable = False)
    delegado = sa.Column(sa.VARCHAR(100), nullable = False)
    
class tbMunicipio(base):
    __tablename__ = "tbMunicipio"
    
    codIBGE = sa.Column(sa.INTEGER, primary_key = True, index = True, nullable = False)
    municipio = sa.Column(sa.VARCHAR(100), nullable = False)
    regiao = sa.Column(sa.VARCHAR(25), nullable = False)
    
class tbOcorrencias(base):
    __tablename__ = "tbOcorrencias "
    
    idRegistro = sa.Column(sa.INTEGER, primary_key = True, index = True, nullable = False)
    codDP = sa.Column(sa.INTEGER, sa.ForeignKey("tbDP.codDP", ondelete= "NO ACTION", onupdate= "CASCADE"), index = True, nullable = False)
    codIBGE = sa.Column(sa.INTEGER, sa.ForeignKey("tbMunicipio.codIBGE", ondelete = "NO ACTION", onupdate= "CASCADE"), index = True, nullable = False)
    ano = sa.Column(sa.CHAR(4), nullable = False)
    mes = sa.Column(sa.VARCHAR(2), nullable = False)
    ocorrencia = sa.Column(sa.VARCHAR(100), nullable = False)
    qtde = sa.Column(sa.INTEGER, nullable = False)
    
    
try:
       base.metadata.create_all(engine) #criar tabela 
       print("Tabelas criadas")
except Exception as e:
    print(f"Erro ao criar tabelas: {e}")
    



