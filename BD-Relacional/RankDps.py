import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

engine = sa.create_engine("sqlite:///C://Users//Henrique//Documents//Pós//codigo-da-aula//Pós-Graduaçao//Nova Pasta//C-digo-portif-lio-PUC//BD-Relacional/ocorrencias.db")
sessao = orm.sessionmaker(bind=engine)
sessao = sessao()

RankDP = pd.DataFrame(
    sessao.query(
    oc.tbDP.nome.label("DP")
    sa.func.sum(oc.ocorrencias.qtde).label("Total") 
).join(
    oc.ocorrencias,
    oc.ocorrencias.codDP == oc.tbDP.codDP    
).join(
    oc.municipio,
    oc.ocorrencias.codIBGE == oc.municipio.codIBGE
).where(
    oc.municipio.regiao == "Capital"
).group_by(
    oc.dp.nome
).order_by(
       sa.func.sum(oc.ocorrencias.qtde).label("Total").desc()
).all()
)

print(RankDP)