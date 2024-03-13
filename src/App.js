import "./App.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [epId, setEpId] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const formatDate = date => {
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`;
        const day = `${date.getDate()}`;

        return `${year}년 ${month}월 ${day}일`;
    };

    const formatDate2 = date => {
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`;
        const day = `${date.getDate()}`;

        return `${year}${month}${day}`;
    };

    const todayDate = formatDate(new Date());
    console.log(todayDate);

    const downloadPdf = async () => {
        const element = document.getElementById("container");
        const canvas = await html2canvas(element, {
            useCORS: true,
        });
        // const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

        const todayDate2 = formatDate2(new Date());
        pdf.save(
            `개인정보 취급자 서약서_${todayDate2}_${department.trim()}_${name.trim()}_${epId.trim()}.pdf`,
        );
    };
    return (
        <div className="wrapper">
            <div id="container">
                <div className="pledge">
                    <div className="header" style={{ marginBottom: "3rem" }}>
                        <p className="title">개인정보 취급자 서약서</p>
                    </div>
                    <div className="main">
                        <p
                            style={{
                                marginBottom: "1rem",
                            }}>
                            본인은 귀사(이하 '회사'라 함)에 업무 목적상
                            고객(이하 '정보주체'라 함)의 개인정보를
                            처리/운영/관리를 함에 있어 아래의 사항을 준수할 것을
                            서약합니다.
                        </p>
                        <p
                            style={{
                                paddingLeft: "1rem",
                                marginBottom: "1.5rem",
                            }}>
                            1. 본인은 회사의 회사 업무 처리를 제공을 목적으로
                            개인정보에 대한 접근권한을 가지고 개인정보를
                            수집/저장/이용/보관/제공/파기(이하, '처리'이라 함)
                            하는 등 실무를 담당하는 자로서 정보주체의 개인정보를
                            보호하고 법적 요구사항을 준시해야 할 책임과 의무가
                            있습니다.
                        </p>
                        <p
                            style={{
                                paddingLeft: "1rem",
                                marginBottom: "1.5rem",
                            }}>
                            2. 본인은 업무 수행을 위해 필요한 최소한의
                            개인정보만을 처리할 것이며, 본인에게 부여된 권한과
                            목적에 한해서만 이용하며, 개인정보 처리업무는 반드시
                            전사 개인정보보호 규칙과 세부 운영기준을 준수할
                            것임을 서약합니다.
                        </p>
                        <p
                            style={{
                                paddingLeft: "1rem",
                                marginBottom: "1.5rem",
                            }}>
                            3. 본인은 업무 수행을 위해 부득이하게 개인정보를
                            처리 위탁을 주거나 제3자에게 제공할 경우 전사
                            정보보안규정 및 전사 개인정보보호규칙에서 정의한
                            제반 정책과 절차를 준수할 것이며 해당 위탁업체 및
                            제3자에 대한 관리·감독을 철저히 하여 이로 인한
                            개인정보유출 또는 침해사고가 발생되지 않도록 노력할
                            것임을 서약합니다.
                        </p>
                        <p
                            style={{
                                paddingLeft: "1rem",
                                marginBottom: "1.5rem",
                            }}>
                            4. 본인은 개인정보에 대해 관련 법에서 정의한
                            정보주체의 권리를 최대한 보장하고 고객의 요구나
                            Claim에 대해 지체 없이 적절한 조치를 취할 것임을
                            서약합니다.
                        </p>
                        <p
                            style={{
                                paddingLeft: "1rem",
                                marginBottom: "1.5rem",
                            }}>
                            5. 본인은 회사에 근무 재직하는 동안 취득하거나
                            직무상 알게 되는 개인정보를 침해, 유출 또는
                            훼손/누설하지 않으며, 이를 정보주체가 동의한 제공
                            목적 이외의 다른 목적이나 기타 부정한 목적으로
                            사용하지 않을 것을 서약합니다.
                        </p>
                        <p
                            style={{
                                paddingLeft: "1rem",
                                marginBottom: "1.5rem",
                            }}>
                            6. 본인은 퇴직 후에도 위의 사항을 준수할 것을
                            약속합니다.
                        </p>
                        <p
                            style={{
                                paddingLeft: "1rem",
                                marginBottom: "1.5rem",
                            }}>
                            7. 본인이 본 서약을 위반하였을 경우, 본인은 사규에
                            따른 징계, 개인정보보호법, 정보통신망 이용촉진에
                            관한 법률 및 기타 관계 법령에 따라 귀사에 대하여
                            손해배상 책임을 포함한 민/형사상의 모든 책임을 질
                            것을 서약합니다.
                        </p>
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}>
                            {todayDate}
                        </p>
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}>
                            부서명 :
                            <input
                                type="text"
                                placeholder=" 예시) 데이터플랫폼Project"
                                value={department}
                                size="20-"
                                style={{ marginLeft: "5px", height: "30px" }}
                                onChange={e => setDepartment(e.target.value)}
                            />
                        </p>

                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}>
                            EP 계정 :
                            <input
                                type="text"
                                placeholder=" 예시) gildong.hong"
                                value={epId}
                                size="18"
                                style={{
                                    marginLeft: "5px",
                                    height: "30px",
                                }}
                                onChange={e => setEpId(e.target.value)}
                            />
                        </p>

                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}>
                            서약인 :
                            <input
                                type="text"
                                placeholder=" 예시) 김엘지"
                                value={name}
                                size="15"
                                style={{
                                    marginLeft: "5px",
                                    height: "30px",
                                }}
                                onChange={e => setName(e.target.value)}
                            />
                        </p>
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                marginBottom: "-10px",
                            }}>
                            LG전자 주식회사 귀중
                            <input
                                type="checkbox"
                                value={name}
                                size="15"
                                style={{
                                    marginLeft: "15px",
                                    height: "30px",
                                }}
                                onClick={e => setIsChecked(e.target.checked)}
                            />
                        </p>
                    </div>
                </div>
            </div>

            <button
                className="btn"
                onClick={downloadPdf}
                disabled={!name || !department || !epId || !isChecked}>
                개인정보 취급자 서약서 다운로드
            </button>
        </div>
    );
}

export default App;
