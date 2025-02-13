import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/images/erro_404.png';

export default function NaoEncontrada() {
    return (
        <>
            <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404
            </span>
                <h1 className={styles.titulo}>
                    Página não encontrada
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer}>
                    <button>Voltar</button>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano."/>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}
