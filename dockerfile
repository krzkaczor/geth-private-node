FROM ethereum/client-go:v1.8.19

WORKDIR /chain

ADD scripts ./scripts

RUN ./scripts/setup-node.sh

CMD ./scripts/run.sh
ENTRYPOINT []
# base image exposes already 8545, we expose ws port additionally
EXPOSE 8546
