

// Function to create and append the table content to container3
function createTableContent() {
    const table = document.getElementById('container3Table');

    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
    <th>No</th>
    <th>Style Name</th>
    <th>Image</th>
    <th>Prompt</th>
    `;
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');
    const tableData = [
        {
            
            no: 1,
            styleName: "Nightwear sets1",
            imageSrc: "images/DR4gy8nt5_gaecPyp5UC5wncKWCz7fq2qKZ8bg-A0eo.jpg",
            prompt: "Lace Bralette + Silk Pajama Shorts"
          },
          {
            no: 2,
            styleName: "Nightwear sets2",
            imageSrc: "images/0PxJMn3FhAU_Xc1vxh4O8wf5yPp4bOxYec3zLiMmnAg.jpg",
            prompt: "Satin Slip Dress + Kimono Robe"
          },
          {
            no: 3,
            styleName: "Nightwear sets3",
            imageSrc: "images/9FOq6Qk30AzNJ3qK-5xRoD43AqzERURuBR1yTJiTa60.jpg",
            prompt: "Mesh Bodysuit + High-Waisted Panties"
          },
          {
            no: 4,
            styleName: "Nightwear sets4",
            imageSrc: "images/FpY2FGriwgNVMQQ_GiUAEqV5Qo2Sb51-d9GX7OHOEck.jpg",
            prompt: "Corset Top + Lace Thong"
          },
          {
            no: 5,
            styleName: "Nightwear sets5",
            imageSrc: "images/yxsRmgQtnXGphndiSzuJ2cdoeT7poH4t50vFIdimLiA.jpg",
            prompt: "Velvet Chemise + Sheer Robe"
          },
          {
            no: 6,
            styleName: "Nightwear sets6",
            imageSrc: "images/K07rBJOCU4kBsMuRA2Da7QnE7qICsp_Zi7xt6yU9Mg4.jpg",
            prompt: "Silk Camisole + Lace Trim Shorts"
          },
          {
            no: 7,
            styleName: "Nightwear sets7",
            imageSrc: "images/CzpZFFJVDeJXA9EP-2me3aPL_B1ouX5VGraZr7MPFBo.jpg",
            prompt: "Tulle Nightgown + Lace Panties"
          },
          {
            no: 8,
            styleName: "Nightwear sets8",
            imageSrc: "images/dg_eQU22bVSRqI7fXL9PW9nNM70MV0zQbu_Z6O8XxfY.jpg",
            prompt: "Satin Pajama Set + Feather Slippers"
          },
          {
            no: 9,
            styleName: "Nightwear sets9",
            imageSrc: "images/p1t-miZiF0J_ITkj1TQSJ3Ee0RplPWokess0AOUQH-k.jpg",
            prompt: "Lace Teddy + Silk Skirt"
          },
          {
            no: 10,
            styleName: "Nightwear sets10",
            imageSrc: "images/n0dYTkaBb40MbOsUxTiyRwslWtr_r3htPbsjkvI9gwk.jpg",
            prompt: "Off-Shoulder Babydoll + Satin Panties"
          },
          {
            no: 11,
            styleName: "Nightwear sets11",
            imageSrc: "images/fcot9ueSuZUS8O2hyu6D_OSAJp1h2LkBtpzIkwEETUo.jpg",
            prompt: "Sheer Chemise + Silk Robe"
          },
          {
            no: 12,
            styleName: "Nightwear sets12",
            imageSrc: "images/L9fV4BWDQvT7efg9UQw47tlN9zVVu2DC9JiJCTI8bGw.jpg",
            prompt: "Plunge Neck Teddy + Maxi Lace Skirt"
          },
          {
            no: 13,
            styleName: "Nightwear sets13",
            imageSrc: "images/DZ9qN_2Z7ka3Kd0uNEcDZaYQXCbvFSPnVpu4pQiZK7w.jpg",
            prompt: "Strapless Lace Bra + Satin Briefs"
          },
          {
            no: 14,
            styleName: "Nightwear sets14",
            imageSrc: "images/M0RyngDOn06-58swQUVQP_TDnIhQghQLIYxLpS-GZMc.jpg",
            prompt: "Sheer Kimono + Silk Nightgown"
          },
          {
            no: 15,
            styleName: "Nightwear sets15",
            imageSrc: "images/WkrnLB-REj3JMDsL7hQ6pl9oyHQSq13gxv1nla3jYIY.jpg",
            prompt: "Halter Neck Babydoll + Matching Thong"
          },
          {
            no: 16,
            styleName: "Nightwear sets16",
            imageSrc: "images/9QUbcKM8n941COiBsNFKosIelaIeFbq8bKbfeRpNEzY.jpg",
            prompt: "Silk Bralette + High-Waisted Satin Shorts"
          },
          {
            no: 17,
            styleName: "Nightwear sets17",
            imageSrc: "images/QIlTg17L7Go-lLGc1CHZ6h8rZ-yzR2Cvf8_7QdcZnHE.jpg",
            prompt: "Lace Bustier + Mesh Skirt"
          },
          {
            no: 18,
            styleName: "Nightwear sets18",
            imageSrc: "images/NPFSf7-ihILE8_G5bsyyB3UhjPuYgpHnjAF81tBimw8.jpg",
            prompt: "Satin Crop Top + Pajama Pants"
          },
          {
            no: 19,
            styleName: "Nightwear sets19",
            imageSrc: "images/CzQUUq53iMp84Gcp5689m8AUoh0Xbj0_iRJQ6PohPS0.jpg",
            prompt: "Long Sleeve Silk Shirt + Lace Panties"
        },
        {
            no: 20,
            styleName: "Nightwear sets20",
            imageSrc: "images/hBekNuTVK39Wy8G1V7h_uG4QvjuY-mCeBgZLx9-DY4w.jpg",
            prompt: "Sheer Nightgown + Velvet Shorts"
        },
        {
            no: 31,
            styleName: "Nightwear sets31",
            imageSrc: "images/lt2csoNyYZkKopkrYQeuupc0SazEYCXVysU-0GrriQU.jpg",
            prompt: "Lace-Up Teddy + Garter Belt, Asian Young Woman"
        },
        {
            no: 32,
            styleName: "Nightwear sets32",
            imageSrc: "images/aJfHnvbKZKS_KpilvuphdLsxh0tIO_jyC1DbDtHLf-I.jpg",
            prompt: "Satin Nightgown + Lace Trim Robe, Asian Young Woman"
        },
        {
            no: 33,
            styleName: "Nightwear sets33",
            imageSrc: "images/qH6sllocb1VI05u23Ft_eEEZkTJ3xt0FvERKvmIKjOM.jpg",
            prompt: "Sheer Bralette + Pajama Shorts, Asian Young Woman"
        },
        {
            no: 34,
            styleName: "Nightwear sets34",
            imageSrc: "images/PiQjZnBmWLfyaPSicrQWMcvhLgUBefGPYrkxkCYz_bE.jpg",
            prompt: "Lace Veiled Teddy + Satin Briefs, Asian Young Woman"
        },
        {
            no: 35,
            styleName: "Nightwear sets35",
            imageSrc: "images/M7eHsQXQCsRElsYZP466irmfAV1UZOhiquiD1gsmQ2Y.jpg",
            prompt: "Spaghetti Strap Chemise + Sheer Thong, Asian Young Woman"
        },
        {
            no: 36,
            styleName: "Nightwear sets36",
            imageSrc: "images/v9DU_hP2lBK88uxM2QEUa5Rh6wtvIz_W-K9hNeoNlDQ.jpg",
            prompt: "Velvet Wrap Dress + Lace Trim, Asian Young Woman"
        },
        {
            no: 37,
            styleName: "Nightwear sets37",
            imageSrc: "images/TTy9LnmOGn5mRJXAMExs9ZWKp-k6g1DSn28mNT8rstg.jpg",
            prompt: "Silk Shirt Dress + Lace Bra, Asian Young Woman"
        },
        {
            no: 38,
            styleName: "Nightwear sets38",
            imageSrc: "images/xm9yrielcyWhiRhojJGBezwv2fq7a2V7J4oUM6dDKgQ.jpg",
            prompt: "Bralette Top + Silk Joggers, Asian Young Woman"
        },
        {
            no: 39,
            styleName: "Nightwear sets39",
            imageSrc: "images/xc1tSFC-yxM7HO8YpjIO3l8n5_a_RLtTFCrS6AksHHg.jpg",
            prompt: "Lace Halter Top + Satin Skirt, Asian Young Woman"
        },
        {
            no: 40,
            styleName: "Nightwear sets40",
            imageSrc: "images/4YQOQvKunce-pQlVG_LfFCv0f7Bpz7Vri7uicZCLYQo.jpg",
            prompt: "Satin Bodysuit + Sheer Overlay, Asian Young Woman"
        },
        {
            no: 41,
            styleName: "Nightwear sets41",
            imageSrc: "images/mkKxoruZOVMKzIhaurYfM930RsrWCeUbL6Jsrxd0du8.jpg",
            prompt: "Sheer Gown + Silk Bikini, Asian Young Woman"
        },
        {
            no: 42,
            styleName: "Nightwear sets42",
            imageSrc: "images/qmwHWolJM3CrIg9vVE3wb579Zo_sLft86NJKOEoH5jc.jpg",
            prompt: "Tulle Babydoll + Matching Eyemask, Asian Young Woman"
        },
        {
            no: 43,
            styleName: "Nightwear sets43",
            imageSrc: "images/5iVvy3TU7tC_EMHfl0wB8IXbpPDYNOU_G0JklZ4YtXI.jpg",
            prompt: "Str ap Detail Teddy + Satin Robe, Asian Young Woman"
        },
        {
            no: 44,
            styleName: "Nightwear sets44",
            imageSrc: "images/QivhwqTDfsm9ohYSpjBKNurtp4tg_ZVxQriYuAK_dEY.jpg",
            prompt: "Silk Bustier + Lace Panties, Asian Young Woman"
        },
        {
            no: 45,
            styleName: "Nightwear sets45",
            imageSrc: "images/CNNldZx_khb9PpNcmNu8s886jmqRked2l_ziE6xkYRg.jpg",
            prompt: "Satin Maxi Slip + Lace Crop Top, Asian Young Woman"
        },
        {
            no: 46,
            styleName: "Nightwear sets46",
            imageSrc: "images/PoeS6xEb0_JuCimHoByNMSGLNLg3hi9KpQqlOIkEltU.jpg",
            prompt: "Lace Crop Bralette + Pajama Pants, Asian Young Woman"
        },
        {
            no: 47,
            styleName: "Nightwear sets47",
            imageSrc: "images/NPWhJUJEXcnYeBFMuLjcpiDWKHJjhV4v4VVs6XjvjMs.jpg",
            prompt: "Sheer Panel Bodysuit + Robe, Asian Young Woman"
        },
        {
            no: 48,
            styleName: "Nightwear sets48",
            imageSrc: "images/SFrF6UE-3sgPkz9YxCzhP1DIw8We_LCBkbkcLYjtTis.jpg",
            prompt: "Satin Bra + Silk Slip Skirt, Asian Young Woman"
        },
        {
            no: 49,
            styleName: "Nightwear sets49",
            imageSrc: "images/DVgLLwrCY1bptKrxbNeLZkcNiX5xoLom4TT-crN6Wjc.jpg",
            prompt: "Plunge Babydoll + Sheer Stockings, Asian Young Woman"
        },
        {
            no: 50,
            styleName: "Nightwear sets50",
            imageSrc: "images/Qa3PE7cgSEmA1pWiqO5wmepO2FjOpW5pZRmKX5r_pmI.jpg",
            prompt: "Cropped Satin PJ Set + Robe, Asian Young Woman"
        },
        {
            no: 51,
            styleName: "Nightwear sets51",
            imageSrc: "images/RIxek5RmA_8GgcmY4F3r-KXys_54EA12AdU-q0bUcYk.jpg",
            prompt: "Lace Trim Camisole + Leggings, Asian Young Woman"
        },
        {
            no: 52,
            styleName: "Nightwear sets52",
            imageSrc: "images/aJfHnvbKZKS_KpilvuphdLsxh0tIO_jyC1DbDtHLf-I.jpg",
            prompt: "Mesh Plunge Teddy + Satin Shorts, Asian Young Woman"
        },
        {
            no: 53,
            styleName: "Nightwear sets53",
            imageSrc: "images/uVTcC9l7luLv9dwtjPb5nMLcCx2P-84dSj6Zk1qHXik.jpg",
            prompt: "Satin Tank Top + Tap Pants, Asian Young Woman"
        },
        {
            no: 54,
            styleName: "Nightwear sets54",
            imageSrc: "images/0EbO-XOpPXBwJabxNl0XojZB76SXSgy2tNfxulxrkyY.jpg",
            prompt: "Lace Trim Corset + Long Skirt, Asian Young Woman"
        },
        {
            no: 55,
            styleName: "Nightwear sets55",
            imageSrc: "images/9wg9EsiumxnkCf3WRRcMrG28M_AjSfjkuf6jPE0gffU.jpg",
            prompt: "Silk Wrap Top + Pajama Pants, Asian Young Woman"
        },
        {
            no: 56,
            styleName: "Nightwear sets56",
            imageSrc: "images/IuPH4JH6ZRUWkrEdp9bXPOkYy7M-nbb5nlJyUUsqYTo.jpg",
            prompt: "Lace Halterneck + Satin Thong, Asian Young Woman"
        },
        {
            no: 57,
            styleName: "Nightwear sets57",
            imageSrc: "images/DMG01CgS9GVZrAscjraQYj6vJsT83dqsU3ZDNJYK3oE.jpg",
            prompt: "Sheer Chemise + Open Back Shorts, Asian Young Woman"
        },
        {
            no: 58,
            styleName: "Nightwear sets58",
            imageSrc: "images/ntHotP3ZX_Z1KmSEig9rN0KbU2pu8u_euaqlQULj16A.jpg",
            prompt: "Velvet Bralette + Satin Pajama Bottoms, Asian Young Woman"
        },
        {
            no: 59,
            styleName: "Nightwear sets59",
            imageSrc: "images/EwoevYEuytTMgwiNIZSE_qHvFCmbLHGqXN6Gf1nrq_w.jpg",
            prompt: "Lace Top + Sheer Skirt, Asian Young Woman"
        },
        {
            no: 60,
            styleName: "Nightwear sets60",
            imageSrc: "images/4uz_YRId6uv5PgouPZxQcKScQt4IqjRdN9vQKPoooYU.jpg",
            prompt: "Plunging Neckline Nightdress + Robe, Asian Young Woman"
        },
        {
            no: 61,
            styleName: "Nightwear sets61",
            imageSrc: "images/JOQqzRQZ2g86BNJi-E4yh9P3a3Jxje_Bh_2_ApoZhz4.jpg",
            prompt: "Satin Shirt Dress + Lace Thong, Asian Young Woman"
        },
        {
            no: 62,
            styleName: "Nightwear sets62",
            imageSrc: "images/_8BYh3gx9T2ZtRQqmNS1r36oRg__3zO1qG7tylF7H7U.jpg",
            prompt: "Lace Bralette + Satin Maxi Skirt, Asian Young Woman"
        },
        {
            no: 63,
            styleName: "Nightwear sets63",
            imageSrc: "images/MEIAVdcpWCNaJrrPh0whzsXxTjcpB3ikynvXM3FNSY4.jpg",
            prompt: "Satin Slip + Lace Overlay, Asian Young Woman"
        },
        {
            no: 64,
            styleName: "Nightwear sets64",
            imageSrc: "images/oN8TM871gAPciBqeUFewaUL7mCIGcPrQmMtuj6N6L1g.jpg",
            prompt: "Wrap Bodysuit + Pants, Asian Young Woman"
        },
        {
            no: 65,
            styleName: "Nightwear sets65",
            imageSrc: "images/_w4Qirmv3MBU2_655M3xQ8VIPAxbtcA01OhDrg7rYGI.jpg",
            prompt: "Sheer Mesh Bra + Silk Shorts, Asian Young Woman"
        },
        {
            no: 66,
            styleName: "Nightwear sets66",
            imageSrc: "https://placehold.co/50x50",
            prompt: "Strappy Lace Bra + Pajama Pants, Asian Young Woman"
        },
        {
            no: 67,
            styleName: "Nightwear sets67",
            imageSrc: "images/PXrO2qN6x4VUKvK0WnFlG4aFnhCuPDaeBOkPVGrHWlE.jpg",
            prompt: "Satin Robe + Lace Panties, Asian Young Woman"
        },
        {
            no: 68,
            styleName: "Nightwear sets68",
            imageSrc: "https://placehold.co/50x50",
            prompt: "Lace Babydoll + Silk Bikini, Asian Young Woman"
        },
        {
            no: 69,
            styleName: "Nightwear sets69",
            imageSrc: "images/xwApI9xL2oLzi3H7hL7hS0_9KIwlQWAB3jxl2YhMYis.jpg",
            prompt: "Silk Bralette + Pajama Bottoms, Asian Young Woman"
        },
        {
            no: 70,
            styleName: "Nightwear sets70",
            imageSrc: "images/0nnZkaCqIkLXBpQij6yPaqqOsczJaUIojMogsRz1hEY.jpg",
            prompt: "Lace Bandeau + Maxi Slip, Asian Young Woman"
        },
        {
            no: 71,
            styleName: "Nightwear sets71",
            imageSrc: "images/XQ1f-QMFCzAWSC0D2wiT1Ww-9GtfXvfn5zfgoA0_bmw.jpg",
            prompt: "Satin Camisole + Sheer Skirt, Asian Young Woman"
        },
        {
            no: 72,
            styleName: "Nightwear sets72",
            imageSrc: "images/XCECPBSfuikl3a63_r_yD1azihRwl27232Cli5kZe88.jpg",
            prompt: "Mesh Bralette + Satin Wrap Skirt, Asian Young Woman"
        },
        {
            no: 73,
            styleName: "Nightwear sets73",
            imageSrc: "images/ybqNzxmPnCQe7UZsO4G7Y5BdYRFF8BeEg-LPHrSybBY.jpg",
            prompt: "Plunge Bodysuit + Lace Kimono, Asian Young Woman"
        },
        {
            no: 74,
            styleName: "Nightwear sets74",
            imageSrc: "images/nhhhCDQSB578dqN1cXBKgP9C4SRG1AsShoycKIINlMY.jpg",
            prompt: "Strappy Crop Top + Silk Pants, Asian Young Woman"
        },
        {
            no: 75,
            styleName: "Nightwear sets75",
            imageSrc: "https://placehold.co/50x50",
            prompt: "Halterneck Babydoll + Satin Briefs, Asian Young Woman"
        },
        {
            no: 76,
            styleName: "Nightwear sets76",
            imageSrc: "images/Du3J4wsz2lSWot1avdHtNPRLF4q9i-hShOFY6eYJ4y8.jpg",
            prompt: "Tulle Mindress + Sheer Robe, Asian Young Woman"
        },
        {
            no: 77,
            styleName: "Nightwear sets77",
            imageSrc: "images/AnK1hPkCRsa92ptkIhaOVqYtuPa47Ofd8VAzSS6RwPo.jpg",
            prompt: "Silk Bustier + Pajama Shorts, Asian Young Woman"
        },
        {
            no: 78,
            styleName: "Nightwear sets78",
            imageSrc: "images/1mX064DXRbDyYYT79YrgcQtqi0mUdgmXeAsKzTIwj3c.jpg",
            prompt: "Structured Corset + Lace Detail Bottoms, Asian Young Woman"
        },
        {
            no: 79,
            styleName: "Nightwear sets79",
            imageSrc: "images/gRYqSrGC3-3qIlyGmAOciijBNemJWZ24kOAwD8WzR9I.jpg",
            prompt: "Velvet Cami + Satin Pajama Pants, Asian Young Woman"
        },
        {
            no: 80,
            styleName: "Nightwear sets80",
            imageSrc: "images/yMQdC4BnID2uo-u-tbRU5ffUXbtsdaNwJSV5RvNi44Q.jpg",
            prompt: "Mesh Babydoll + Garter Belt, Asian Young Woman"
        },
        {
            no: 81,
            styleName: "Nightwear sets81",
            imageSrc: "images/PXLYtZZCiJ48E3Q_9CyTYSht9yWoCQAD-EsLFHJxxPg.jpg",
            prompt: "Satin Nightgown + Lace Bralette, Asian Young Woman"
        },
        {
            no: 82,
            styleName: "Nightwear sets82",
            imageSrc: "images/rbfF4B1UXHMo62mINuBD3lnRIY09VPmv9ml6qewA-ZA.jpg",
            prompt: "Lace Trim Top + Silk Pants, Asian Young Woman"
        },
        {
            no: 83,
            styleName: "Nightwear sets83",
            imageSrc: "images/OU4SYgF7x7-wTVySXhRVk-lwnoFDGGm60a-syzHwHDg.jpg",
            prompt: "Sheer Lace Teddy + High Slit Skirt, Asian Young Woman"
        },
        {
            no: 84,
            styleName: "Nightwear sets84",
            imageSrc: "images/9k9M8nfv6nIG0XbR1lzHsE7tNRs3jIfm41PwWXZPmOo.jpg",
            prompt: "Strapless Chemise + Satin Robe, Asian Young Woman"
        },
        {
            no: 85,
            styleName: "Nightwear sets85",
            imageSrc: "images/Q8tfoyRUz9vSAiiFrBPuJyaXl9w_pUHTXjeBtwZTjLs.jpg",
            prompt: "Velvet Camisole + Lace Thong, Asian Young Woman"
        },
        {
            no: 86,
            styleName: "Nightwear sets86",
            imageSrc: "images/hFIQGqhbpXwGa8_-Se6ZRfBTn7YF32KVz392vLRkBQk.jpg",
            prompt: "Halter Neck Bodysuit + Sheer Pants, Asian Young Woman"
        },
        {
            no: 87,
            styleName: "Nightwear sets87",
            imageSrc: "images/XxR6Cwx_VYwLx4ey0FzMJNb8yM6YNZ7gX-vK6IZC9No.jpg",
            prompt: "Lace Bralette + Pajama Shorts, Asian Young Woman"
        },
        {
            no: 88,
            styleName: "Nightwear sets88",
            imageSrc: "images/_hciZllq4V7OilylQ9yax4WIy3io8dlGPMPvt0DS33M.jpg",
            prompt: "Silk Cropped Top + High Waist Briefs"
        },
        {
            no: 89,
            styleName: "Nightwear sets89",
            imageSrc: "images/Bk0m9A1WGqrInq53aB47ZeJlMyDG81PpYxp-R1YUqMg.jpg",
            prompt: "Open Back Chemise + Silk Panties"
        },
        {
            no: 90,
            styleName: "Nightwear sets90",
            imageSrc: "images/jsV6IKNuY4LGlXrqgWrBSYjsOLShHvRXTCaKWQsBjOk.jpg",
            prompt: "Lace Overlay Bodysuit + Skirt"
        },
        {
            no: 91,
            styleName: "Nightwear sets91",
            imageSrc: "images/Bko4-UWAGXHaragHE6jdWtfX1REB_zmqWNKNrpwIUvU.jpg",
            prompt: "Satin Crop Top + Lace Pajama Shorts"
        },
        {
            no: 92,
            styleName: "Nightwear sets92",
            imageSrc: "images/hCwll-lqZRIaCuFJVHDCqiFCyJtVYMXkCIB2NGcSdQU.jpg",
            prompt: "Mesh Camisole + Wrap"
        },
        {
            no: 93,
            styleName: "Nightwear sets93",
            imageSrc: "images/nkm1c5jNj-QFahXPHRArNlTxMh4uOjWKa-fFOx4hZ44.jpg",
            prompt: "Lace Detail Gown + Satin Briefs"
        },
        {
            no: 94,
            styleName: "Nightwear sets94",
            imageSrc: "images/tin3mXrlqL2W121LrEfVC2C1QZzj770HDA2EIaSPjNQ.jpg",
            prompt: "Silk Cami + Sheer Robe"
        },
        {
            no: 95,
            styleName: "Nightwear sets95",
            imageSrc: "images/eO14jfEmyQCEvOt7hTsDZyfl5mDGTHVGGBgBnR68tQg.jpg",
            prompt: "Strap Detail Bralette + Pajama Pants"
        },
        {
            no: 96,
            styleName: "Nightwear sets96",
            imageSrc: "images/0s28eCyoiApShzX_ENsAaMnuJ57Aq0d65AiYZcxICo4.jpg",
            prompt: "Satin Plunge Dress + Lace Bustier"
        },
        {
            no: 97,
            styleName: "Nightwear sets97",
            imageSrc: "images/yK5IUCYm47BrzCdfdT26Ub-3-VPkB8tkMv94rRei8CI.jpg",
            prompt: "Lace Crop Top + Velvet Pants"
        },
        {
            no: 98,
            styleName: "Nightwear sets98",
            imageSrc: "images/DSxwxvhPlQWN6DVk5eGFe_GzBbexmnUK2KMUcstX0-Q.jpg",
            prompt: "Sheer Puff Sleeve Top + Silk Shorts"
        },
        {
            no: 99,
            styleName: "Nightwear sets99",
            imageSrc: "images/WuNpzdl4cSTi3Szhl85aAg6-icU964CVPwwb7K_Aigs.jpg",
            prompt: "Satin Slip + Sheer Overlay"
        },
        {
            no: 100,
            styleName: "Nightwear sets100",
            imageSrc: "images/Q4m9C-VqbjioswnpTzoOP5VBOkqwhZOXuaRWv59gm_E.jpg",
            prompt: "Gartered Bodysuit + Robe"
        },
        {
            no: 101,
            styleName: "Nightwear sets101",
            imageSrc: "images/kxB4AsoUSgIBZmG6AqxFJl8qKGG8FbALDUQmIXRJlf4.jpg",
            prompt: "Velvet Teddy + Sheer Kimono"
        },
        {
            no: 102,
            styleName: "Nightwear sets102",
            imageSrc: "images/BJ-txLFWXynRUeUgISdDxM0hfth6mS1v0qL-4JfSgaw.jpg",
            prompt: "Lace Crop Top + Satin Midi Skirt"
        },
        {
            no: 103,
            styleName: "Nightwear sets103",
            imageSrc: "images/O2ujVbebNjgeglWIBhorzwzwTmu597U9vOC0a5mVKjI.jpg",
            prompt: "Satin Shirt and Shorts Set + Lace Bra"
        },
        {
            no: 104,
            styleName: "Nightwear sets104",
            imageSrc: "images/AH3bCyyfq_e2rVsW10yyMNRCYvrbffBuT7utmzYYyCM.jpg",
            prompt: "Plunge Lace Nightgown + Silk Robe"
        },
        {
            no: 105,
            styleName: "Nightwear sets105",
            imageSrc: "images/iScLo6PU31wGgaB0QKIh2FoREGfKdigrt59MKyG-Vb4.jpg",
            prompt: "Sheer Panel Camisole + Pajama Pants"
        },
        {
            no: 106,
            styleName: "Nightwear sets106",
            imageSrc: "images/ZnyZZyqbfRBB2sNqz_ZvAeutkIfw0R7dQnaT4zfilB8.jpg",
            prompt: "Silk Bralette + Satin A-Line Skirt"
        },
        {
            no: 107,
            styleName: "Nightwear sets107",
            imageSrc: "images/tSaLbutHJejovmUL9r8z1jfsecSVQ30wt3yfUu3xK5Q.jpg",
            prompt: "Tiered Lace Babydoll + Matching Thong"
        },
        {
            no: 108,
            styleName: "Nightwear sets108",
            imageSrc: "images/lF5YnOEZDbjal4nboGSBObSmsPGK1O0rs9CRmlVI0Iw.jpg",
            prompt: "Corset Bodysuit + Silk Sleep Shorts"
        },
        {
            no: 109,
            styleName: "Nightwear sets109",
            imageSrc: "images/G3ujjW2fAS4tJa1uvSi6dTSdp_S_nUYTnC1srxeuPgs.jpg",
            prompt: "Satin Chemise + Lace Trim Gloves"
        },
        {
            no: 110,
            styleName: "Nightwear sets110",
            imageSrc: "images/imc7bSrqEVdf5sDNEC87TWSDVkTJJ7okwniMUSO5sl0.jpg",
            prompt: "Mesh Bralette + High-Waisted Satin Pants"
        },
        {
            no: 111,
            styleName: "Nightwear sets111",
            imageSrc: "images/etwTI3aI4pKcIe4uIsKASXnCcJuT2-l8cXZOGWI-ub8.jpg",
            prompt: "Lace Halter Dress + Silk Panties"
        },
        {
            no: 112,
            styleName: "Nightwear sets112",
            imageSrc: "images/zEe6t-ZtxHe3O-jSvxUECXv4eCKzGv2B-a5PP7Deri0.jpg",
            prompt: "Silk Slip + Tulle Wrap"
        },
        {
            no: 113,
            styleName: "Nightwear sets113",
            imageSrc: "images/t0QfvJ_h5S4oNgWoZ8iB_B28Rrz6dF9OaXYrA1Sbspc.jpg",
            prompt: "Sheer Bralette + Long Satin Skirt"
        },
        {
            no:  114,
            styleName: "Nightwear sets114",
            imageSrc: "images/y3ZpyWS8uinY8ptI9YLIYQMstLBWf8s8CDmjrs8Fwwg.jpg",
            prompt: "Velvet Nightdress + Lace Kimono"
        },
        {
            no: 115,
            styleName: "Nightwear sets115",
            imageSrc: "images/x8IMwk4h1UvjULiri9Af31jva_jCJ_Vz3fv86t-cVm4.jpg",
            prompt: "Satin Corset + Pajama Shorts, Asian Young Woman"
        },
        {
            no: 116,
            styleName: "Nightwear sets116",
            imageSrc: "images/_dSv_9f913jqk_t8jDoXwPePEEcoYZX1E_2nabdz5io.jpg",
            prompt: "Lace Plunge Bodysuit + Sheer Robe, Asian Young Woman"
        },
        {
            no: 117,
            styleName: "Nightwear sets117",
            imageSrc: "images/RGG39ACNtc-kp_fFCc_iAnBPHRLQesVN35QMAmfVGSY.jpg",
            prompt: "Tulle Camisole + Silk Pants, Asian Young Woman"
        },
        {
            no: 118,
            styleName: "Nightwear sets118",
            imageSrc: "images/yjT3bGYpAu_b9CYKJZ9cMfBvDJbUirjfWF0CljsL01o.jpg",
            prompt: "Silk Crop Top + Satin Palazzo Pants, Asian Young Woman"
        },
        {
            no: 119,
            styleName: "Nightwear sets119",
            imageSrc: "images/YUMmwyeOh5JHH-ini9N5gCJr8y6kc_RIY9HvOCcId6s.jpg",
            prompt: "Sheer Lace Nightgown + Velvet Robe, Asian Young Woman"
        },
        {
            no: 120,
            styleName: "Nightwear sets120",
            imageSrc: "images/9HBY4DoeitiRO-g59L9WD4YxDq47jygVKQXhqwjho3I.jpg",
            prompt: "Lace Bustier + High-Waisted Shorts, Asian Young Woman"
        },
        {
            no: 121,
            styleName: "Nightwear sets121",
            imageSrc: "images/92slCGV-Q34Xi8LIV5QZ6t9dOWPsjOgLkfBX4vZaHLI.jpg",
            prompt: "Satin Bandeau + Sheer Flowing Pants, Asian Young Woman"
        },
        {
            no: 122,
            styleName: "Nightwear sets122",
            imageSrc: "images/8B9cWZpvAe51H7yKtWlsPtOt4-cs_CQkUJuG7IzR984.jpg",
            prompt: "Mesh Crop Top + Silk Skirt, Asian Young Woman"
        },
        {
            no: 123,
            styleName: "Nightwear sets123",
            imageSrc: "images/EwuVRznnCNO6xYAWrIipDKrAF-aO894jzT7yFulVmv4.jpg",
            prompt: "Silk Bralette + Lace Mule Slippers, Asian Young Woman"
        },
        {
            no: 124,
            styleName: "Nightwear sets124",
            imageSrc: "images/6J4ugQyTmInMcyKmCxLGMkxj3T1d3uY6Oxp8hoSyDP0.jpg",
            prompt: "Sheer Teddy + Satin Half Slip, Asian Young Woman"
        },
        {
            no: 125,
            styleName: "Nightwear sets125",
            imageSrc: "images/EFH24jomrmVmFDfEZR1mQ0S1PjQqiqE0EfXrq-H9HUM.jpg",
            prompt: "Silk Kimono + Lace Bra Set, Asian Young Woman"
        },
        {
            no: 126,
            styleName: "Nightwear sets126",
            imageSrc: "images/t1ueb4Y_mQzUZrMzJfQuvuvjXV_Fod-LQjsoU4wUKy0.jpg",
            prompt: "Lace Hem Nightdress + Robe, Asian Young Woman"
        },
        {
            no: 127,
            styleName: "Nightwear sets127",
            imageSrc: "images/C4TQ1gH7wKTCXdU1otRCnVhh9dfOeJqIbBcNSCrS62o.jpg",
            prompt: "Velvet Bralette + Sheer Silk Wrap, Asian Young Woman"
        },
        {
            no: 128,
            styleName: "Nightwear sets128",
            imageSrc: "images/G5dA080h3om-At_sTiZqNJu-UAB9KoszxYNAOko47uE.jpg",
            prompt: "Satin Off-Shoulder Top + Pajama Shorts, Asian Young Woman"
        },
        {
            no: 129,
            styleName: "Nightwear sets129",
            imageSrc: "images/kMTFS04TreP2q32KLGX4FW4FetjIOlGhOO5YP_hM0bU.jpg",
            prompt: "Lace Halter Bralette + Satin Skirt, Asian Young Woman"
        },
        {
            no: 130,
            styleName: "Nightwear sets130",
            imageSrc: "images/NiaHGZPQ5WB5scRHnl664JdLwCJyZIkL3w_0XfARp5k.jpg",
            prompt: "Mesh Panel Nightgown + Silk Panties, Asian Young Woman"
        },
        {
            no: 131,
            styleName: "Nightwear sets131",
            imageSrc: "images/hhD1uwppVdD59A7m297aMQdU8YD_jod8SEPn8Tdc35I.jpg",
            prompt: "Satin Cami + Lace Joggers, Asian Young Woman"
        },
        {
            no: 132,
            styleName: "Nightwear sets132",
            imageSrc: "images/M8mXje3UolIKgAQ8fDR4X9C75ROSOz62YX72tGxo7iM.jpg",
            prompt: "Sheer Deep V Set + Silk Robe, Asian Young Woman"
        },
        {
            no: 133,
            styleName: "Nightwear sets133",
            imageSrc: "images/T1wEUx5LsEG0OKU2EMYlMwKEsLOkkiuy-yZmt8zNVss.jpg",
            prompt: "Lace Nightdress + Floral Satin Robe, Asian Young Woman"
        },
        {
            no: 134,
            styleName: "Nightwear sets134",
            imageSrc: "images/VSkOq4rcmftzSLeC_ggi5-STdaEYnG0sMN6ACE3lHX4.jpg",
            prompt: "Silk Babydoll + Sheer Gloves, Asian Young Woman"
        },
        {
            no: 135,
            styleName: "Nightwear sets135",
            imageSrc: "images/-vRx2fIrU32V2ddqyPX3f2Yw4nZmjQjbxqckesttnOI.jpg",
            prompt: "Velvet Off-Shoulder Crop + High-Waisted Pants, Asian Young Woman"
        },
        {
            no: 136,
            styleName: "Nightwear sets136",
            imageSrc: "images/BJzuB99tg2freYKqdNqdbT6v0Bqmnyr8yTC0aAOj-rU.jpg",
            prompt: "Silk Camisole + Lace Trim Shorts, Asian Young Woman"
        },
        {
            no: 137,
            styleName: "Nightwear sets137",
            imageSrc: "images/3ux_nQOpMKOiufNj5FiHrsyLuAWiauSVo2Z3U0eClYo.jpg",
            prompt: "Lace Strapless Bodysuit + Long Robe, Asian Young Woman"
        },
        {
            no: 138,
            styleName: "Nightwear sets138",
            imageSrc: "images/xs9Tn5dlOYxzYhgJOhWbQ2eH2IvMXsdMIQJu_S_jjO0.jpg",
            prompt: "Satin Babydoll + Sheer Overcoat, Asian Young Woman"
        },
        {
            no: 139,
            styleName: "Nightwear sets139",
            imageSrc: "images/yFd42g65bGmiupG_v3nvfMKh2n6J4i1Cznr-7F1ipbI.jpg",
            prompt: "Mesh Bralette + Velvet Slip Skirt, Asian Young Woman"
        },
        {
            no: 140,
            styleName: "Nightwear sets140",
            imageSrc: "images/AqlnxYqqauv4glf12ba-hHj87VaRP74ED13MYXE9b_0.jpg",
            prompt: "Satin Wrap Top + Pajama Bottoms, Asian Young Woman"
        },
        {
            no: 141,
            styleName: "Nightwear sets141",
            imageSrc: "images/FlzGfp5YuW8RIADlLYoN-weOP2bhzdTgAnxq7hCnMck.jpg",
            prompt: "Silk Trim Lace Dress + Thigh-High Stockings, Asian Young Woman"
        },
        {
            no: 142,
            styleName: "Nightwear sets142",
            imageSrc: "images/yQ3SQ-TR1aYdD-ZM_EXeKRLTcjTTV5udSRSNaDTCccY.jpg",
            prompt: "Plunge Neck Bralette + Satin Gown, Asian Young Woman"
        },
        {
            no: 143,
            styleName: "Nightwear sets143",
            imageSrc: "images/JQEhJ3DAvBXl5nOQRqssc0sicmLDUI4XS5VgLcZ4RPg.jpg",
            prompt: "Velvet Bustier + Lace Trim Shorts, Asian Young Woman"
        },
        {
            no: 144,
            styleName: "Nightwear sets144",
            imageSrc: "images/5imROEvYbepowgl4mTfWdusi-XaEzXQNG3Pckdr0v2Y.jpg",
            prompt: "Satin Shoulder Crop + Sheer Pants, Asian Young Woman"
        },
        {
            no: 145,
            styleName: "Nightwear sets145",
            imageSrc: "images/7vOJqfajW1v-9wZ_gVyf9UPbn_N6nO79y9innfHzYsw.jpg",
            prompt: "Lace Halterneck Teddy + Satin Robe, Asian Young Woman"
        },
        {
            no: 146,
            styleName: "Nightwear sets146",
            imageSrc: "images/HkLLqdz06DWLcUaKmEc658T8veGKuO-IkCp2g7LmdVc.jpg",
            prompt: "Sheer Nightshirt + Lace Bralette, Asian Young Woman"
        },
        {
            no: 147,
            styleName: "Nightwear sets147",
            imageSrc: "images/_mF-rReq5vJwjRDZAWz-OxucahuBgFaxBxBJYRgsmvc.jpg",
            prompt: "Silk Wrap Chemise + Velvet Shorts, Asian Young Woman"
        },
        {
            no: 148,
            styleName: "Nightwear sets148",
            imageSrc: "images/8Qq7MMlgC3x55t8VxmQLf8V0QZ4irWaf4CDPR-FZPeU.jpg",
            prompt: "Lace Camisole + Satin Maxi Pants, Asian Young Woman"
        },
        {
            no: 149,
            styleName: "Nightwear sets149",
            imageSrc: "images/PKyp-XmBmtkUOd2LzpaHJjFjPtyhzuJ04JynwrGA5Co.jpg",
            prompt: "Mesh Open-Back Dress + Satin Kimono, Asian Young Woman"
        },
        {
            no: 150,
            styleName: "Nightwear sets150",
            imageSrc: "images/ewOhLB4w2l_ATZPoGIZWtd65cDI_HoofUky-5sjFjC8.jpg",
            prompt: "Silk Bralette + Sheer Palazzo, Asian Young Woman"
        },
        {
            no: 151,
            styleName: "Nightwear sets151",
            imageSrc: "images/X5qhuAC21wAzpxy2O75ghW22u_1QmXsOi9C69WOVgwk.jpg",
            prompt: "Tulle Detail Nightgown + Lace Panties, Asian Young Woman"
        },
        {
            no: 152,
            styleName: "Nightwear sets152",
            imageSrc: "images/4xVDHz5-8_jqAn_zKHIKNqD659eIw4IUIA7ECFLeEiA.jpg",
            prompt: "Satin Shorts + Plunging Lace Top, Asian Young Woman"
        },
        {
            no: 153,
            styleName: "Nightwear sets153",
            imageSrc: "images/4_hDRKssrxVLzjslI8Ksa3QqlYyNti_zNudQnlSu31E.jpg",
            prompt: "Velvet Bralette + Sheer Maxi Skirt, Asian Young Woman"
        },
        {
            no: 154,
            styleName: "Nightwear sets154",
            imageSrc: "images/3NHmtc9xANZceNrV9mbd1-CI8RWzDzaYlihChdJTaGw.jpg",
            prompt: "Lace Plunge Dress + Satin Gloves, Asian Young Woman"
        },
        {
            no: 155,
            styleName: "Nightwear sets155",
            imageSrc: "images/LGCptF-rT4F034Y9oDqIMbiXhQQmn5Ku0aSj2DjrwMo.jpg",
            prompt: "Satin Chemise + Tiered Robe, Asian Young Woman"
        },
        {
            no: 156,
            styleName: "Nightwear sets156",
            imageSrc: "images/_4e8aipJqBfgE7KULWwZdfDh432l8gBspUyWLwIR_KY.jpg",
            prompt: "Mesh Layered Teddy + Silk Shorts, Asian Young Woman"
        },
        {
            no: 157,
            styleName: "Nightwear sets157",
            imageSrc: "images/toI2KkDmH5MzAv4MCRqVY7iDBRJ5xSl4wm81esey8AM.jpg",
            prompt: "Corset Top + Pajama Wrap Skirt, Asian Young Woman"
        },
        {
            no: 158,
            styleName: "Nightwear sets158",
            imageSrc: "images/fz_kfTtHERLJyh8I0XG8Z_xLlWGbrE5ubx1XMxNIuho.jpg",
            prompt: "Velvet Bustier + Satin Kimono, Asian Young Woman"
        },
        {
            no: 159,
            styleName: "Nightwear sets159",
            imageSrc: "images/4OETnj0srVM5KaFKfvttZLNQjYJGUHFOTxkS9_A6iyY.jpg",
            prompt: "Satin Cami + Lace Tap Shorts, Asian Young Woman"
        },
        {
            no: 160,
            styleName: "Nightwear sets160",
            imageSrc: "images/brY_g3kRxJeWCfkhX3JhmFOPWCa1J4iHgyfZSmnXzvU.jpg",
            prompt: "Silk Babydoll + Lace Detail Robe, Asian Young Woman"
        },
        {
            no: 161,
            styleName: "Nightwear sets161",
            imageSrc: "images/Px5FNpWURLKdfAG257D6knR3WxN3jdfRQBHWEF6Gjdg.jpg",
            prompt: "Mesh Bralette + Satin High Slit Skirt, Asian Young Woman"
        },
        {
            no: 162,
            styleName: "Nightwear sets162",
            imageSrc: "images/WBj04g9GZvez-JjTtI2UVqfWTTTRanhRhtgGeb32lj8.jpg",
            prompt: "Lace Halter Top + Tulle Pants, Asian Young Woman"
        },
        {
            no: 163,
            styleName: "Nightwear sets163",
            imageSrc: "images/8eg3_gScvaAKZ9RuLYKH-7UMYPUI5OedPQxAQVNrJIw.jpg",
            prompt: "Silk Lined Nightgown + Lace Gloves, Asian Young Woman"
        },
        {
            no: 164,
            styleName: "Nightwear sets164",
            imageSrc: "images/0scNcJVgnsXFfmweStAI0EGDB7AYDO0UxriHUCG0Gtw.jpg",
            prompt: "Satin Pajama Top + Sheer Skirt, Asian Young Woman"
        },
        {
            no: 165,
            styleName: "Nightwear sets165",
            imageSrc: "images/erxa_xKwg2W4uD_6WS5XLAhrYKatuBQKSzlJ7xzfySE.jpg",
            prompt: "Velvet Slip Dress + Sheer Trim, Asian Young Woman"
        },
        {
            no: 166,
            styleName: "Nightwear sets166",
            imageSrc: "images/NJ-Q1DM-xlQzt3u-JBgiU39lY8o_zXgo84f17TqIm28.jpg",
            prompt: "Corset Lace Top + Silk Pajama Bottoms, Asian Young Woman"
        },
        {
            no: 167,
            styleName: "Nightwear sets167",
            imageSrc: "images/OH2har3zbIT619Twl9OjIOUpnYzMdJ4RYnOxy1XZjsQ.jpg",
            prompt: "Mesh Bustier + Sheer Silk Pants, Asian Young Woman"
        },
        {
            no: 168,
            styleName: "Nightwear sets168",
            imageSrc: "images/8zUu_KTKtYavt2oJovkmWcsVLcZupAJTD0pBO-wNYCo.jpg",
            prompt: "Satin Crop Pajama Set + Lace Thong, Asian Young Woman"
        },
        {
            no: 169,
            styleName: "Nightwear sets169",
            imageSrc: "https://placehold.co/50x50",
            prompt: "Sheer Plunge Chemise + Silk Robe, Asian Young Woman"
        },
        {
            no: 170,
            styleName: "Nightwear sets170",
            imageSrc: "images/jxQrbxpolS-VD0czX18gPpGbPpsGcGcWW8wadbhSEvY.jpg",
            prompt: "Lace Nightdress + Velvet Wrap, Asian Young Woman"
        },
        {
            no: 171,
            styleName: "Nightwear sets171",
            imageSrc: "images/YU9RcTn7POyHXMf-00Qk0OdbOixdiilqpiYQy2QCoPY.jpg",
            prompt: "Silk Teddy + Lace Open Pants, Asian Young Woman"
        },
        {
            no: 172,
            styleName: "Nightwear sets172",
            imageSrc: "images/kmllHCZ4PVpyTmH8T2ZHch_FGHWZlDooE_SBlBao5h0.jpg",
            prompt: "Tulle Babydoll + Lace Overcoat, Asian Young Woman"
        },
        {
            no: 173,
            styleName: "Nightwear sets173",
            imageSrc: "images/gFJogW2vSPm71doiIco-2SmVSuwDGm1riSF4oAvPVKw.jpg",
            prompt: "Mesh Panel Babydoll + Satin Trim, Asian Young Woman"
        },
        {
            no: 174,
            styleName: "Nightwear sets174",
            imageSrc: "images/vzD_cli5SYzm3LreST2Va6w4zupBbb4LpPC49lYRUKY.jpg",
            prompt: "Silk Camisole + Lace Pajama Pants, Asian Young Woman"
        },
        {
            no: 175,
            styleName: "Nightwear sets175",
            imageSrc: "images/N7-t8-9La2pk6mQPRdmslu01wSY93oaToDsoG6Hg0wo.jpg",
            prompt: "Velvet Halterneck Dress + Satin Panties, Asian Young Woman"
        },
        {
            no: 176,
            styleName: "Nightwear sets176", 
            imageSrc: "images/4KgHFQkWQXYIg_ayEY53NXu2QLA3IyTLvfgjbi2CPLk.jpg",
            prompt: "Sheer Bodysuit + Silk Maxi Wrap, Asian Young Woman"
        },
        {
            no: 177,
            styleName: "Nightwear sets177",
            imageSrc: "images/OttGxOl2RML36Ksl2pLqSPGM_9qUVaB6gBh5Tz3pjg8.jpg",
            prompt: "Sequin Trim Lingerie Set + Sheer Robe, Asian Young Woman"
        },
        {
            no: 178,
            styleName: "Nightwear sets178",
            imageSrc: "images/_hP--6vneOYrUznlB9bpd0xXghVY47FCfQNvWy5aHzE.jpg",
            prompt: "Lace Gown + Velvet Gloves, Asian Young Woman"
        },
        {
            no: 179,
            styleName: "Nightwear sets179",
            imageSrc: "images/raRpluRzAeyBpoesbWYxO4y3o9WtJSIKlTovi-BDtU0.jpg",
            prompt: "Satin Bralette + High-Waisted Sheer Skirt, Asian Young Woman"
        },
        {
            no: 180,
            styleName: "Nightwear sets180",
            imageSrc: "images/kRo4isLC4uR9AXN1ROsksO8s6aUEdyClRMrwAPocqko.jpg",
            prompt: "Mesh Gown + Satin Trim Shorts, Asian Young Woman"
        },
        {
            no: 181,
            styleName: "Nightwear sets181",
            imageSrc: "images/wk1XoTvWwldUnNOxxhAQDTohoP6XrNlyumSwGO_jbb0.jpg",
            prompt: "Silk Slip Dress + Lace Ankle Slippers, Asian Young Woman"
        },
        {
            no: 182,
            styleName: "Nightwear sets182",
            imageSrc: "images/dDo6Z2sWF9AH4q9LljKAuwHmttdt4GDGjCHjQuwhXfA.jpg",
            prompt: "Satin Panel Bralette + Lace Skirt, Asian Young Woman"
        },
        {
            no: 183,
            styleName: "Nightwear sets183",
            imageSrc: "images/WEK9s4B6CoXsduzu_0tYUXRF8whkWsAJtTghjuVA1hE.jpg",
            prompt: "Velvet Insert Nightdress + Silk Panties, Asian Young Woman"
        },
        {
            no: 184,
            styleName: "Nightwear sets184",
            imageSrc: "images/TCkdk0_v4epvnouDJm-IqRyAL2HOE-JnRit2Um-utto.jpg",
            prompt: "Lace Corset Dress + Sheer Kimono, Asian Young Woman"
        },
        {
            no: 185,
            styleName: "Nightwear sets185",
            imageSrc: "images/_5iVr7Eys-JRynRZG6c-fMKUWOvG5lKxGDMFkElVhV8.jpg",
            prompt: "Sheer Bra Set + Satin Evening Wrap, Asian Young Woman"
        },
        {
            no: 186,
            styleName: "Nightwear sets186",
            imageSrc: "images/faAFX5eLc1OeKXvr6uRStiztLZg7KLhoxlwnkgPJehs.jpg",
            prompt: "Satin Bandeau + Velvet Leggings, Asian Young Woman"
        },
        {
            no: 187,
            styleName: "Nightwear sets187",
            imageSrc: "images/_LQt2_F0NGGw3E177e_6bDqX4n2W67z6LvopZWRLo3g.jpg",
            prompt: "Corset Nightdress + Lace Trim Robe, Asian Young Woman"
        },
        {
            no: 188,
            styleName: "Nightwear sets188",
            imageSrc: "images/MHbPXbCkbH_1juC0rj4jufNDHl2_PepIUZVTd3geMOM.jpg",
            prompt: "Mesh Crop Chemise + Satin Pants, Asian Young Woman"
        },
        
        {
            no: 189,
            styleName: "Nightwear sets189",
            imageSrc: "images/-vO3clGDo9givhXA4mkFKNZncMpUCzdQ0rYB-Gso2QY.jpg",
            prompt: "Silk Bustier + Sheer Maxi Dress, Asian Young Woman"
        },
        
        {
            no: 190,
            styleName: "Nightwear sets190",
            imageSrc: "images/4OETnj0srVM5KaFKfvttZLNQjYJGUHFOTxkS9_A6iyY.jpg",
            prompt: "Velvet Strapless Bra + Satin Shorts, Asian Young Woman"
        },
        
        {
            no: 191,
            styleName: "Nightwear sets191",
            imageSrc: "images/a_F5LA2xCCwwUMg6NzXUU5LMucXu1oRGb9IEUd8i3Xg.jpg",
            prompt: "Lace Long Sleeve Bodysuit + Wrap, Asian Young Woman"
        },
        
        {
            no: 192,
            styleName: "Nightwear sets192",
            imageSrc: "images/bZdfDT-UUia3a8KS77_aACiYr_d7FUE-DrqAOK0hNII.jpg",
            prompt: "Satin Cami + Lace Jogger Set, Asian Young Woman"
        },
        
        {
            no: 193,
            styleName: "Nightwear sets193",
            imageSrc: "images/gYnGRhqD4XblMhNp0JAr05Uric-ZfXqIpcLqlXKMew8.jpg",
            prompt: "Silk Trim Corset + Sheer Panties, Asian Young Woman"
        },
        
        {
            no: 194,
            styleName: "Nightwear sets194",
            imageSrc: "images/yJdt17xgvK9-ppkKbNG12t_lgnahWKEOhOUQavEt2eQ.jpg",
            prompt: "Mesh Halterneck + Satin Skirt, Asian Young Woman"
        },
        
        {
            no: 195,
            styleName: "Nightwear sets195",
            imageSrc: "images/_ghA9mp_YcGAWEoz15dI4pBQ6Sajc4bymu3fXMLmwG4.jpg",
            prompt: "Lace Back Nightdress + Satin Wrap, Asian Young Woman"
        },
        
        {
            no: 196,
            styleName: "Nightwear sets196",
            imageSrc: "images/WFIa5XSM5P56ccaPCq5d9MKW78r8rIAo1DqHzCzr3Y0.jpg",
            prompt: "Velvet Chemise + Mesh Trim, Asian Young Woman"
        },
        
        {
            no: 197,
            styleName: "Nightwear sets197",
            imageSrc: "images/1X8p3tew_gJbmVqFRY_Qksoe8jd1mm4lnQS1PhvodCY.jpg",
            prompt: "Silk Off-Shoulder Top + Lace Briefs, Asian Young Woman"
        },
        
        {
            no: 198,
            styleName: "Nightwear sets198",
            imageSrc: "images/RotyX8Np4Bt7TQNxLSwVm1JocijnKNpCyF7Zo1zp1Vo.jpg",
            prompt: "Lace Bralette + Satin Pleated Skirt, Asian Young Woman"
        },
        
        {
            no: 199,
            styleName: "Nightwear sets199",
            imageSrc: "images/aELFnH0dxK71wMbkzL5cqgGSnwZ5L5i9cH-K5126EY0.jpg",
            prompt: "Satin Long Nightgown + Sheer Robe, Asian Young Woman"
        },
        
        {
            no: 200,
            styleName: "Nightwear sets200",
            imageSrc: "images/lWdneWQnAguvfVMZ1c-m9MSvOPTZdgN8FXYpTILD4Kc.jpg",
            prompt: "Corset Top + Silk Lace Trim Shorts, Asian Young Woman"
        },
                
        {
            no: 201,
            styleName: "Nightwear sets 227",
            imageSrc: "images/2ytdsPHssLVqbTXbLbWlfPY3dN9pYjbMu6SzpaJ8J4o.jpg",
            prompt: "Cashmere Nightwear Night Suit, cashmere nightwear, soft, premium, Asian Young Woman"
        },
        {
            no: 202,
            styleName: "Nightwear sets 202",
            imageSrc: "images/e3XaN79TgWnMkWKndPz_hIfrxOXSbGmEQdDtU4etxEI.jpg",
            prompt: "A-line Nightdress Night Suit, A-line nightdress, classic silhouette, comfortable, Asian Young Woman"
        },
        
        {
            no: 203,
            styleName: "Nightwear sets 203",
            imageSrc: "images/U5066-fxEYs9KM_efnxk46V9CUFGz2ggXFn4Dq7o9bQ.jpg",
            prompt: "Adjustable Straps Nightwear Night Suit, adjustable straps nightwear, customizable, comfortable, Asian Young Woman"
        },
        
        {
            no: 204,
            styleName: "Nightwear sets 204",
            imageSrc: "images/bq2W6fbwmwj-_D4S7aICWjEe61h10ApsglWo_1lqCvg.jpg",
            prompt: "Alpaca Wool Pajamas Night Suit, alpaca wool pajamas, warm, luxurious, Asian Young Woman"
        },
        
        {
            no: 205,
            styleName: "Nightwear sets 205",
            imageSrc: "images/zcKjs9mfF9VyN2J0ycGXUka14PVB3mnp3JHWAYr7Prc.jpg",
            prompt: "Animal Print Pajamas Night Suit, bold animal print pajamas, night suit, fun, Asian Young Woman"
        },
        
        {
            no: 206,
            styleName: "Nightwear sets 206",
            imageSrc: "images/sCctXcs8XuRXbnh2FAmHwZYX6ykhi0AjFzNAxA7x2Hw.jpg",
            prompt: "Ankle Length Pajama Pants Night Suit, ankle length pajama pants, modern, comfortable, Asian Young Woman"
        },
        
        {
            no: 207,
            styleName: "Nightwear sets 207",
            imageSrc: "images/w4vyiDIf_bukFxl9bjdqrqS-yoZdb9GagchsNApEFDs.jpg",
            prompt: "Anti-bacterial Fabric Pajamas Night Suit, anti-bacterial fabric pajamas, fresh, hygienic, Asian Young Woman"
        },
        
        {
            no: 208,
            styleName: "Nightwear sets 208",
            imageSrc: "images/ftpZG-BdU8-9BLYacrI-Yh2qO0K6UxCRx8XmNAKi-Cg.jpg",
            prompt: "Aromatherapy Infused Pajamas Night Suit, aromatherapy infused pajamas, calming, soothing, Asian Young Woman"
        },
        
        {
            no: 209,
            styleName: "Nightwear sets 209",
            imageSrc: "images/pU_Kf9zx2NrDVZbVNIPeRllJmpOqGzV17sR6AzfPi7w.jpg",
            prompt: "Asymmetrical Hem Nightgown Night Suit, asymmetrical hem nightgown, unique style, Asian Young Woman"
        },
        
        {
            no: 210,
            styleName: "Nightwear sets 210",
            imageSrc: "images/aQ81-rRtGF5jH_6ZBJ0WqcjbdgHJ2EUYqniDDYebLew.jpg",
            prompt: "Baby Doll Nightwear Night Suit, baby doll nightwear, flirty, charming, Asian Young Woman"
        },
        
        {
            no: 211,
            styleName: "Nightwear sets 211",
            imageSrc: "images/_KBG7byrBz14HiauNhKwrHQtf5CPloKe0T5SuPgcLlc.jpg",
            prompt: "Ballet Sleeve Nightgown Night Suit, ballet sleeve nightgown, graceful, night suit, Asian Young Woman"
        },
        
        {
            no: 212,
            styleName: "Nightwear sets 212",
            imageSrc: "images/Y6ou_MXiRWRRlo0ShXti5Xh72gjApVFY1Y-eg8hMafY.jpg",
            prompt: "Bamboo Pajamas, Eco-friendly fabric offering breathability and comfort, Asian Young Woman"
        },
        
        {
            no: 213,
            styleName: "Nightwear sets 213",
            imageSrc: "images/nvUS2yRdTpsem_hRPxlyIiehusu9wRLgftm4v73dXfw.jpg",
            prompt: "Beaded Detail Nightwear Night Suit, beaded detail nightwear, decorative, stylish, Asian Young Woman"
        },
        
        {
            no: 214,
            styleName: "Nightwear sets 214",
            imageSrc: "images/NsJvKuHaGOtIGxHts--Puw4fC0nSXMY5vB0Qp9h6U6I.jpg",
            prompt: "Bell Sleeve Nightgown Night Suit, bell sleeve nightgown, elegant, flowing, Asian Young Woman"
        },
        
        {
            no: 215,
            styleName: "Nightwear sets 215",
            imageSrc: "images/Ol2CDkHmGkP8WSmJPhyIpwF0GXweE-IZpXwq37AaYB4.jpg",
            prompt: "Belted Nightdress Night Suit, belted nightdress, flattering, simple, Asian Young Woman"
        },
        
        {
            no: 216,
            styleName: "Nightwear sets 216",
            imageSrc: "images/O3j9lIvLdW3mZLU5KKzgqBSW5NUTo02v_SdjfTYsOvQ.jpg",
            prompt: "Bermuda Shorts Nightwear Night Suit, Bermuda shorts nightwear, casual, comfortable, Asian Young Woman"
        },
        
        {
            no: 217,
            styleName: "Nightwear sets 217",
            imageSrc: "images/9q8UX9rVhs2EODRL7IacgKIMIzh-dzvJoEfPSyaSszk.jpg",
            prompt: "Bodycon Pajama Set Night Suit, bodycon pajama set, snug fit, trendy, Asian Young Woman"
        },
        
        {
            no: 218,
            styleName: "Nightwear sets 218",
            imageSrc: "images/yegdpFdS5FTrtHb4lS5aDoVwiesd4KQkrdqJT7kSwUQ.jpg",
            prompt: "Bohemian Nightwear Night Suit, bohemian nightwear, artistic, free-spirited, Asian Young Woman"
        },
        
        {
            no: 219,
            styleName: "Nightwear sets 219",
            imageSrc: "images/ZmQJCKxI_nDTktiTNIU3NMxwXefAxGlYPEM_LrIoBaY.jpg",
            prompt: "Boyfriend Pajamas, Relaxed fit, inspired by men’s pajama styles, Asian Young Woman"
        },
        
        {
            no: 220,
            styleName: "Nightwear sets 220",
            imageSrc: "images/FbrTLscMuSX0mR2k2hx4zhXCtWFRub8pB6iAk7lV1iU.jpg",
            prompt: "Boy short pajama Set, Camisole paired with boy shorts, Asian Young Woman"
        },
        
        {
            no: 221,
            styleName: "Nightwear sets 221",
            imageSrc: "images/c4gDIJ3ouRoOsqS-AtGy3KQdyYRHshEiGuvVoBLakYQ.jpg",
            prompt: "Breathable Linen Pajamas, Lightweight and airy, great for summer, Asian Young Woman"
        },
        
        {
            no: 222,
            styleName: "Nightwear sets 222",
            imageSrc: "images/kL9UT3Rk-cFIuIai05kbZM9BgfjJW_2Nz0g_c9BNXes.jpg",
            prompt: "Button-front Pajama Top Night Suit, button-front pajama top, easy wear, classic, Asian Young Woman"
        },
        
        {
            no: 223,
            styleName: "Nightwear sets 223",
            imageSrc: "images/3qJkFB2LyZNuvGXLhtebibVlcRhJ1etzltAU36ORxF0.jpg",
            prompt: "Button-Up Nightshirt, Classic design with button closure , Asian Young Woman"
        },
        
        {
            no: 224,
            styleName: "Nightwear sets 224",
            imageSrc: "images/jpH7CYyphbdzW_SjTqjPx-jaF_FxbsvWYz0DNA2USSM.jpg",
            prompt: "Camisole and Shorts Set, Light and breathable ideal for warm nights, Asian Young Woman"
        },
        
        {
            no: 225,
            styleName: "Nightwear sets 225",
            imageSrc: "images/MT-vMzX5YcwO8FqKT2BSxT1ZVc2jGc7ek9zbchZGI5U.jpg",
            prompt: "Cap Sleeve Nightshirt Night Suit, cap sleeve nightshirt, casual, comfy, Asian Young Woman"
        },
        
        {
            no: 226,
            styleName: "Nightwear sets 226",
            imageSrc: "images/VXYEBI95OTHf8aAKBxkaHGTdlZhhtnYQEwnjJhzm9I8.jpg",
            prompt: "Capri Pajama Set Night Suit, capri pajama set, breathable, easy, Asian Young Woman"
        },
        {
            no: 227,
            styleName: "Nightwear sets 227",
            imageSrc: "images/-hDf6XEb0gKncnYxRBJKZUzqeL11G7VSXZYn15YNmTE.jpg",
            prompt: "Charmeuse Nightwear Night Suit, offering a shiny, smooth finish"
          },
          {
            no: 228,
            styleName: "Nightwear sets 228",
            imageSrc: "images/SomJm4VZtnAfhvTpApkfcMRKJT7_nWvJj7CRVrUkMV0.jpg",
            prompt: "Chemise Nightwear Night Suit, elegant and comfortable"
          },
          {
            no: 229,
            styleName: "Nightwear sets 229",
            imageSrc: "images/MG1VdhEyq1HXve6EWG3zE9pk8lrXYtSZWYt69xPAJ_k.jpg",
            prompt: "Chiffon Sleepwear Night Suit, light and airy, perfect for summer"
          },
          {
            no: 230,
            styleName: "Nightwear sets 230",
            imageSrc: "images/JK1j4LGUC5PJ9acpr1GuZcs4uNs0mx0MaRsZ0dh9lNQ.jpg",
            prompt: "Classic Cotton Pajamas, timeless design, soft and breathable"
          },

            {
              no: 231,
              styleName: "Nightwear sets 231",
              imageSrc: "images/eiJPdG6sKNP8Y_MlRC-eKFdRe-Sx1DM3t-5xRYl-O5w.jpg",
              prompt: "Cold Shoulder Nightwear Night Suit, cold shoulder nightwear, fashionable, edgy,"
            },
            {
              no: 232,
              styleName: "Nightwear sets 232",
              imageSrc: "images/3UWU_UsOG8MafOVuuhFe5kkxsa85XoRrrvpseeUOyWY.jpg",
              prompt: "Cooling Pajama Set Night Suit, cooling pajama set, refreshing, comfortable,"
            },
            {
              no: 233,
              styleName: "Nightwear sets 233",
              imageSrc: "images/udOGDMfTXyrkHtin9pg_It-nwA8zeFdm8mbI3FVOabM.jpg",
              prompt: "Coolmax Pajama Set Night Suit, coolmax pajama set, moisture-wicking, cool,"
            },
            {
              no: 234,
              styleName: "Nightwear sets 234",
              imageSrc: "images/qYE9P0GRr9fWZBs-NPXMcXHWPRfadj-uR7OSBI_5QCM.jpg",
              prompt: "Cotton Pajamas, Breathable and comfortable, suitable for all seasons,"
            },
            {
              no: 235,
              styleName: "Nightwear sets 235",
              imageSrc: "images/nLUSSm9VLCAZgr4nvFTCKf2k5BXTQIgg9pHQV8lkE6o.jpg",
              prompt: "Crew Neck Sleep Shirt Night Suit, crew neck sleep shirt, night suit, casual comfort,"
            },
            {
              no: 236,
              styleName: "Nightwear sets 236",
              imageSrc: "images/Dds2iGoPggIn7A77HsYXQmOhP2EnrPQHhSPFx4DyVgQ.jpg",
              prompt: "Criss-cross Back Nightgown Night Suit, criss-cross back nightgown, unique design, modern,"
            },
            {
              no: 237,
              styleName: "Nightwear sets 237",
              imageSrc: "images/PVBdumOwyPeSlV9N71RGI0nTWWu0JdAEqx79y7XiNdo.jpg",
              prompt: "Crochet Detail Nightgown Night Suit, crochet detail nightgown, delicate, feminine,"
            },
            {
              no: 238,
              styleName: "Nightwear sets 238",
              imageSrc: "images/9_NCHi2Snv4pfDftoKymyQuDjp7_VvwuxHr_hv-Tu4o.jpg",
              prompt: "Cropped Pajama Pants, Shorter length pants, ideal for warmer nights,"
            },
            {
              no: 239,
              styleName: "Nightwear sets 239",
              imageSrc: "images/k-Gzp_FxGkd4JKAKn08MsN0364td6LzRzPevAdmrIQg.jpg",
              prompt: "Cropped Pajama Top Night Suit, cropped pajama top, trendy, modern,"
            },
            {
              no: 240,
              styleName: "Nightwear sets 240",
              imageSrc: "images/NU08GGcEy7vV6IfP2IULdQ1sPXVWkqTctmrHwVlGrxM.jpg",
              prompt: "Cross-Back Nightgown, Back features a stylish cross-strap design,"
            },
            {
              no: 241,
              styleName: "Nightwear sets 241",
              imageSrc: "images/ZGRWIxT9XUJkifwVjPiK4ZfluLQR47vtZNyR2O4T9YE.jpg",
              prompt: "Cuffed Pajama Pants Night Suit, cuffed pajama pants, trendy, stylish,"
            },
            {
              no: 242,
              styleName: "Nightwear sets 242",
              imageSrc: "images/ruWnn1YIXlsFxYcJ7bW64i_ChJUIUmuUN4-WynioRoA.jpg",
              prompt: "Drawstring Waist Pajama Pants Night Suit, drawstring waist pajama pants, adjustable, comfortable,"
            },
            {
              no: 243,
              styleName: "Nightwear sets 243",
              imageSrc: "images/6ncK2JoUp2yTJ4_IG1u-p1aJh4yF-_wPiaRUr0iyQlU.jpg",
              prompt: "Elastic Waistband Pajama Pants Night Suit, elastic waistband pajama pants, flexible, easy,"
            },
            {
              no: 244,
              styleName: "Nightwear sets 244",
              imageSrc: "images/t-UnWVhbNvRKfb6CiQMtHeABPn1wXP64Q7S8HjzMbVw.jpg",
              prompt: "Electric Heated Pajamas Night Suit, electric heated pajamas, warm, cozy,"
            },
            {
              no: 245,
              styleName: "Nightwear sets 245",
              imageSrc: "images/8hM2JNNOO6FlPb2VHa3sMnoyHN6Jltu2PCJMitLrvaw.jpg",
              prompt: "Embossed Print Nightwear Night Suit, embossed print nightwear, textured, sophisticated,"
            },
            {
              no: 246,
              styleName: "Nightwear sets 246",
              imageSrc: "images/Cp_ro16zRVwxgf3lvtBp7g4dNwneuJwt1VMTkPK-sQg.jpg",
              prompt: "Embroidered Nightwear, Delicately embroidered fabrics for an elegant touch,"
            },
            {
              no: 247,
              styleName: "Nightwear sets 247",
              imageSrc: "images/jp0TqoO2unM_Om_RYR99Y7gcb5FzZiBN0zDlqfIhH0g.jpg",
              prompt: "Embroidered Yoke Nightdress Night Suit, embroidered yoke nightdress, detailed, elegant,"
            },
            {
              no: 248,
              styleName: "Nightwear sets 248",
              imageSrc: "images/2qUoR-3VM_9zcyZk854LMV9ZnXuU8PrRM2IiSsDuqXM.jpg",
              prompt: "Empire Waist Nightdress Night Suit, empire waist nightdress, night suit, vintage charm,"
            },
            {
              no: 249,
              styleName: "Nightwear sets 249",
              imageSrc: "images/z53JCSOc49D3psYE_D9noIBQSQ0Ckjm6wIwogv0F2zE.jpg",
              prompt: "Ethnic Style Pajamas, Incorporating traditional patterns and designs,"
            },
            {
              no: 250,
              styleName: "Nightwear sets 250",
              imageSrc: "images/TDbvmFcjcWDvtiBy2Y0iQMMaCBAHRLimYwsZKpCz4yM.jpg",
              prompt: "Flannel Pajamas, Warm, cozy material, perfect for winter,"
            },
            {
              no: 251,
              styleName: "Nightwear sets 251",
              imageSrc: "images/Co7N65b7cRTKmWJYQWZKaYhDK9_0zbGf4Ubu5iv8Zg8.jpg",
              prompt: "Fleece Pajama Set Night Suit, cozy fleece pajamas, night suit, soft fabric,"
            },
            {
              no: 252,
              styleName: "Nightwear sets 252",
              imageSrc: "images/CPPxLhrXuxjzXBzopZBgZgnQzt7UDIEf1W14-Xrpw5k.jpg",
              prompt: "Floral Print Nightgown Night Suit, floral print nightgown, night suit, feminine,"
            },
            {
              no: 253,
              styleName: "Nightwear sets 253",
              imageSrc: "images/DMUFdm2_naUhLB18yd6Q20K8XA8rOu0rYftrxi07sWo.jpg",
              prompt: "Floral Silk Nightgown, Elegant silk adorned with floral patterns,"
            },
            {
              no: 254,
              styleName: "Nightwear sets 254",
              imageSrc: "images/TNw05z2qiceybVfi3Yq3nkEFRbH3muVVqx9LtWYWTPc.jpg",
              prompt: "Footed Pajamas, Full-body coverage, including feet, great for kids and adults,"
            },
            {
              no: 255,
              styleName: "Nightwear sets 255",
              imageSrc: "images/TNw05z2qiceybVfi3Yq3nkEFRbH3muVVqx9LtWYWTPc.jpg",
              prompt: "French Lace Nightdress, Intricate French lace detailing, romantic appeal,"
            },          
            {
                no: 261,
                styleName: "Nightwear sets 261",
                imageSrc: "images/7AUQTjupUYZn7GX_6TPlfpvkvUq_HuqvL3Bx0DaRQMg.jpg",
                prompt: "Hand-woven Cotton Pajamas Night Suit, hand-woven cotton pajamas, artisanal, unique,"
              },
              {
                no: 262,
                styleName: "Nightwear sets 262",
                imageSrc: "images/VveKuagIS7BjMGmd67w_4Xzx-5s0cPO7T6KQ13ntBcE.jpg",
                prompt: "Harem Pajama Pants Night Suit, harem style pajama pants, relaxed fit, boho,"
              },
              {
                no: 263,
                styleName: "Nightwear sets 263",
                imageSrc: "images/mN1__6jJUfFMoL3liAY7oiIyVB9wVoBfAv927sPlx78.jpg",
                prompt: "Hemp Fabric Nightwear Night Suit, hemp fabric nightwear, sustainable, durable,"
              },
              {
                no: 264,
                styleName: "Nightwear sets 264",
                imageSrc: "images/zdycuxfOQ4n5w2Em5bXU8iJQNsJEjo1bY6UCzYcS3qo.jpg",
                prompt: "Henley Pajamas, Featuring a Henley-style shirt with buttons at the neck,"
              },
              {
                no: 265,
                styleName: "Nightwear sets 265",
                imageSrc: "images/UKJnz1pCWKo47TbdHxHGqj-G1EDrfzLreajFb6r0IxQ.jpg",
                prompt: "High-low Hem Sleep Dress Night Suit, high-low hem sleep dress, modern, night suit,"
              },
              {
                no: 266,
                styleName: "Nightwear sets 266",
                imageSrc: "images/IVw1Pj_5lip_J3ci7nS1sQakGmtPBEZK5oIc_A0-ouk.jpg",
                prompt: "Hooded Pajamas, Featuring a hood for added warmth and style,"
              },
              {
                no: 267,
                styleName: "Nightwear sets 267",
                imageSrc: "images/15wK_ak96epDXd3UJWtkU0CpfZBPpw-YOYWETSkRMdM.jpg",
                prompt: "Hydrophobic Fabric Pajamas Night Suit, hydrophobic fabric pajamas, water-resistant, innovative,"
              },
              {
                no: 268,
                styleName: "Nightwear sets 268",
                imageSrc: "images/iYR2DFByAHWpvl3f_3YvzaaHwjBPVEtaxzwYibCeV74.jpg",
                prompt: "Jacquard Knit Nightwear Night Suit, jacquard knit nightwear, intricate design, textured,"
              },
              {
                no: 269,
                styleName: "Nightwear sets 269",
                imageSrc: "images/2j0L9myy7EWwCWisDS1NPS22HCrBYlCjXjSEFb_C6xU.jpg",
                prompt: "Jogger-style Pajama Pants Night Suit, jogger-style pajama pants, casual, athletic,"
              },
              {
                no: 270,
                styleName: "Nightwear sets 270",
                imageSrc: "images/xQY6gB6SJWsEm9oEh6d9lzdhCOdpKKq7e6oJrDgsfNk.jpg",
                prompt: "Kaftan Nightdress, Loose, flowing garment with sleeves,"
              },
              {
                no: 271,
                styleName: "Nightwear sets 271",
                imageSrc: "images/dlq7loqARpDgV62U8UVbHS31n3z3rBBs7eMIUvAdML8.jpg",
                prompt: "Kaftan Style Sleepwear Night Suit, kaftan style sleepwear, bohemian, relaxed,"
              },
              {
                no: 272,
                styleName: "Nightwear sets 272",
                imageSrc: "images/X21DrUPqG9wjtxeNB7gLsDlDAwKZCDbOoiAIT7rG-Ho.jpg",
                prompt: "Kimono Sleeve Nightwear Night Suit, kimono sleeve nightwear, wide sleeves, chic,"
              },
              {
                no: 273,
                styleName: "Nightwear sets 273",
                imageSrc: "images/MyFqb74PVX_-aKqYfiQodMaXZ6uS3q-gp57fYay_fCM.jpg",
                prompt: "Lace-Trimmed Nightgown, Elegantly designed with lace detailing,"
              },
              {
                no: 274,
                styleName: "Nightwear sets 274",
                imageSrc: "images/iT4MuvCv5CxU-NvrBqXCoRfholaXP4xYqGh6Ze7p4Qo.jpg",
                prompt: "Linen-cotton Blend Pajamas Night Suit, linen-cotton blend pajamas, airy, comfortable,"
              },
              {
                no: 275,
                styleName: "Nightwear sets 275",
                imageSrc: "images/LcKPq3cerCqi9y7oqcxstsIXbjFBjVtI-imxemjRFok.jpg",
                prompt: "Long John Pajamas Night Suit, traditional long john pajamas, snug, night suit,"
              },
              {
                no: 276,
                styleName: "Nightwear sets 276",
                imageSrc: "images/l0UpEom8oc0E6xdxzVsYhIiteiUKhY_ZOiPTcPVu5QE.jpg",
                prompt: "Long Sleeve Nightgown, Offers warmth with longer sleeves,"
              },
              {
                no: 277,
                styleName: "Nightwear sets 277",
                imageSrc: "images/2c_IIZwXNjF9gKqXGXQTZna9kEV4FMMno6tWQntDoRA.jpg",
                prompt: "Loose Fit Nightwear Night Suit, loose fit nightwear, relaxed, comfortable,"
              },
              {
                no: 278,
                styleName: "Nightwear sets 278",
                imageSrc: "images/0f1FRvpUWBcIX52afvyrSU03EY6rY9zZKSfaxusT52o.jpg",
                prompt: "Loungewear Set, Comfortable set designed for both lounging and sleeping,"
              },
              {
                no: 279,
                styleName: "Nightwear sets 279",
                imageSrc: "images/YXu3tayF-eZ4epkULlyVOTnyiVOhFJ7HSGP7GhAxwUw.jpg",
                prompt: "Lyocell Nightwear Night Suit, lyocell nightwear, eco-friendly, comfortable,"
              },
              {
                no: 280,
                styleName: "Nightwear sets 280",
                imageSrc: "images/tTELWODmGrf0p1h7vButigPmLTypVWtJnSgwW6h1Qrc.jpg",
                prompt: "Mandarin Collar Pajamas Night Suit, mandarin collar pajamas, classic, polished look,"
              },
              {
                no: 281,
                styleName: "Nightwear sets 281",
                imageSrc: "images/FlPV95DVVVLFak0rt2i5ctEBbOjpdj0xKcGcoYhz2hc.jpg",
                prompt: "Mastectomy Nightwear Night Suit, mastectomy nightwear, supportive, considerate,"
              },
              {
                no: 282,
                styleName: "Nightwear sets 282",
                imageSrc: "images/d5FN-yxumvbeGBZoMu_8T1yA5bV5WwkmutwqMG8HeEI.jpg",
                prompt: "Maternity Night Suit, Specifically designed for expectant mothers,"
              },
              {
                no: 283,
                styleName: "Nightwear sets 283",
                imageSrc: "images/sNaCdqTDl2sKYFTde30Kcsdj6i14e7eY_J-3WByjDbo.jpg",
                prompt: "Maxi Length Nightdress Night Suit, maxi length nightdress, flowing, graceful,"
              },
              {
                no: 284,
                styleName: "Nightwear sets 284",
                imageSrc: "images/SJqR4j-kyaS9za8s9vGBFQGaLTSSR3_7ox_rFYHNCLo.jpg",
                prompt: "Merino Wool Pajamas Night Suit, merino wool pajamas, cozy, breathable,"
              },
              {
                no: 285,
                styleName: "Nightwear sets 285",
                imageSrc: "images/eiH6Md88gKhoZbNJgeMmHrrv_KyuYBbrYvrJ4lkdWfA.png",
                prompt: "Modal Blend Nightwear Night Suit, modal blend fabric, smooth, silky feel,"
              },
              {
                no: 286,
                styleName: "Nightwear sets 286",
                imageSrc: "images/34mdnlVAz_tdRmMHCU6xr6kwdeVsIVwZ-LtD166v05Q.jpg",
                prompt: "Nursing Pajamas Night Suit, nursing pajamas, convenient for breastfeeding,"
              },
              {
                no: 287,
                styleName: "Nightwear sets 287",
                imageSrc: "images/q4M0uVxaaNgXh2JhLaIerakUU-mV-Z5emvxi9WIs1CI.jpg",
                prompt: "Organic Cotton Nightwear Night Suit, organic cotton nightwear, eco-conscious, soft,"
              },
              {
                no: 288,
                styleName: "Nightwear sets 288",
                imageSrc: "images/Ybm_JvBNqjsD9aKNMQ27f7t52-fDO8YoelHE8ytH3o8.png",
                prompt: "Paisley Print Night Suit, paisley print night suit, vibrant, boho-chic,"
              },
              {
                no: 289,
                styleName: "Nightwear sets 289",
                imageSrc: "images/YmKkKQ0vMqs5GIjLsvMm99a7VuF3dkvLbnI1XDw2tAo.jpg",
                prompt: "Mock Neck Pajama Top Night Suit, mock neck pajama top, night suit, elegant, modern,"
              },
              {
                no: 290,
                styleName: "Nightwear sets 290",
                imageSrc: "https://placehold.co/50x50",
                prompt: "Modal Pajamas Night Suit, modal pajamas, soft, breathable,"
              },

                {
                  no: 291,
                  styleName: "Nightwear sets 291",
                  imageSrc: "images/Ujr6PRPl92BSo2NwW6fS0_YNdr6r8da9x_Yh5vC97eE.jpg",
                  prompt: "Modal Pajamas, Made from super soft fabric, great for comfort"
                },
                {
                  no: 292,
                  styleName: "Nightwear sets 292",
                  imageSrc: "images/NxyI-VknFQr3xdFBjLuB5vKu9QDvQpYS2WW34NAR07A.jpg",
                  prompt: "Modal-cotton Blend Pajamas Night Suit, modal-cotton blend pajamas, soft, breathable"
                },
                {
                  no: 293,
                  styleName: "Nightwear sets 293",
                  imageSrc: "images/osUyyWnRGmFL5YEOaksIB9hjcQQGcNQcuEILLphNXJo.jpg",
                  prompt: "Moisture-wicking Fabric Pajamas Night Suit, moisture-wicking fabric pajamas, dry, comfortable"
                },
                {
                  no: 294,
                  styleName: "Nightwear sets 294",
                  imageSrc: "images/XGpEZPOETa56HnAG5XfaOfsss1nujlYOpKKvanitzGM.jpg",
                  prompt: "Nautical Theme Pajamas Night Suit, nautical theme pajamas, night suit, ocean vibes"
                },
                {
                  no: 295,
                  styleName: "Nightwear sets 295",
                  imageSrc: "images/eHp8UwP8rsuIBiE_ogig-3uJFBRh1h3bh_BIep3Yl6U.jpg",
                  prompt: "Nightgown, A single-piece, loose-fitting garment, often long"
                },
                {
                  no: 296,
                  styleName: "Nightwear sets 296",
                  imageSrc: "images/AtPPtUQxsWk7jyblMXn5p1xwV9Zf4sLLj2YDGkJtEpE.jpg",
                  prompt: "Nightshirt, A longer shirt worn as a nightdress, usually knee-length"
                },
                {
                  no: 297,
                  styleName: "Nightwear sets 297",
                  imageSrc: "images/Diz_lS0mIhuV8NR4K6cRiWrh8MoR9UMT33jZOac6syw.jpg",
                  prompt: "Notched Collar Pajama Top Night Suit, notched collar pajama top, night suit, timeless"
                },
                {
                  no: 298,
                  styleName: "Nightwear sets 298",
                  imageSrc: "images/4rmkccZ9z3gAUbuuvtD2CxqgrOHwmmpCDUjMft7Me1Y.jpg",
                  prompt: "Nursing Pajamas Night Suit, nursing pajamas, functional, comfortable"
                },
                {
                  no: 299,
                  styleName: "Nightwear sets 299",
                  imageSrc: "images/tfyJn4Q3fnUHNvsrs0sXkDi7IfHBw525cA6KpfWzHQw.jpg",
                  prompt: "Off Shoulder Nightgown Night Suit, off shoulder nightgown, fashion-forward, stylish"
                },
                {
                  no: 300,
                  styleName: "Nightwear sets 300",
                  imageSrc: "images/ptPa0VoYVk6IzJ4D9xY3Q6ziAaErge26VpXlglYI_VA.jpg",
                  prompt: "Ombre Pajama Set Night Suit, ombre pajama set, gradient colors, stylish"
                },
                {
                  no: 301,
                  styleName: "Nightwear sets 301",
                  imageSrc: "images/-wtfAc7lcSufqIodeuhBw5M32wKANhE0VpI_iHzbgMA.jpg",
                  prompt: "Onesie, A full-body garment including feet, ideal for colder nights"
                },
                {
                  no: 302,
                  styleName: "Nightwear sets 302",
                  imageSrc: "images/cj6VRxlemKc4wGflrwK3wwJPop4VSHZL20iJxhBFaP0.jpg",
                  prompt: "Open Shoulder Pajama Top Night Suit, open shoulder pajama top, trendy, modern"
                },
                {
                  no: 303,
                  styleName: "Nightwear sets 303",
                  imageSrc: "images/p4ezRU2fg3ECf3rgD9Zq-odiWAm1Cud85JEdUSNFr0c.jpg",
                  prompt: "Organic Bamboo Pajamas Night Suit, organic bamboo pajamas, eco-friendly, soft"
                },
                {
                  no: 304,
                  styleName: "Nightwear sets 304",
                  imageSrc: "images/KLdygV5DY70fwjL16g_kK57S_D45j7X7O6gzRIrtckw.jpg",
                  prompt: "Organic Cotton Pajamas Night Suit, organic cotton pajamas, natural, breathable"
                },
                {
                  no: 305,
                  styleName: "Nightwear sets 305",
                  imageSrc: "images/jAy2Dk8bC6IaS7R_9EE6DjvD4SExsMatcvExggkqzpU.jpg",
                  prompt: "Oversized Pajama Top Night Suit, oversized pajama top, roomy, casual"
                },
                {
                  no: 306,
                  styleName: "Nightwear sets 306",
                  imageSrc: "images/kGcc6yImVkAoKJf46eOuG4y3t_zCnJpxE4s7UJoMaBQ.jpg",
                  prompt: "Paisley Pattern Pajamas Night Suit, paisley pattern pajamas, night suit, elegant design"
                },
                {
                  no: 307,
                  styleName: "Nightwear sets 307",
                  imageSrc: "https://placehold.co/50x50",
                  prompt: "Pajama Set, Classic two-piece set with a shirt and pants"
                },
                {
                  no: 308,
                  styleName: "Nightwear sets 308",
                  imageSrc: "images/9rjzegwBYvi7XW9vbFIvdcsPDVT1ffcVe2Saj29BV7Q.jpg",
                  prompt: "Patchwork Print Pajamas Night Suit, patchwork print pajamas, eclectic, colorful"
                },
                {
                  no: 309,
                  styleName: "Nightwear sets 309",
                  imageSrc: "images/WuoA8DzljDoFHqpr_vKnwTYChA_8Dx3-GD1yLTbUiMg.jpg",
                  prompt: "Peasant Style Nightie Night Suit, peasant style nightie, rustic, charming"
                },
                {
                  no: 310,
                  styleName: "Nightwear sets 310",
                  imageSrc: "images/0MmcJeRZnwUcjtDBqAwe-6w2tGpf3msjOENbYCKfwyw.jpg",
                  prompt: "Peplum Pajama Top Night Suit, peplum pajama top, fashionable, feminine"
                },
                {
                  no: 311,
                  styleName: "Nightwear sets 311",
                  imageSrc: "images/NTMccimYw8wAFOhbN6kmKSYbsOlmrznJM-FO6a5kjso.jpg",
                  prompt: "Piping Detail Pajamas, Featuring contrast piping for extra style"
                },
                {
                  no: 312,
                  styleName: "Nightwear sets 312",
                  imageSrc: "images/NWLGbs0G_u1wzqHdGbPx1FKWprtbvnu_C932zEFSAyE.jpg",
                  prompt: "Plush Robe, Thick, fluffy robe for added warmth"
                },
                {
                  no: 313,
                  styleName: "Nightwear sets 313",
                  imageSrc: "images/4_g0-pweQ7EqF0xxdbTYfnhut570x_nAk1AJGLS6Y_M.jpg",
                  prompt: "Polka Dot Pajamas Night Suit, playful polka dot pajamas, night suit, classic"
                },
                {
                  no: 314,
                  styleName: "Nightwear sets 314",
                  imageSrc: "images/-5GQKyzGiDRtt5rP8WCOivz_AhCTCWSFk2bAlVQMbqU.jpg",
                  prompt: "Polyester-cotton Blend Pajamas Night Suit, polyester-cotton blend pajamas, easy care"
                },
                {
                  no: 315,
                  styleName: "Nightwear sets 315",
                  imageSrc: "images/9NWNVyj6jAJ5Ov6q2bUI4USb86c_7kBdZw3eosvKcvQ.jpg",
                  prompt: "Robe, Soft, luxurious robe for a cozy feeling"
                },
                {
                  no: 316,
                  styleName: "Nightwear sets 316",
                  imageSrc: "images/CpYr2vWbnfitYsDU8T5rYrRSBi6NVfSwiTk3emeycbc.jpg",
                  prompt: "Romper Pajama Set Night Suit, comfy romper pajama set, one-piece"
                },
                {
                  no: 317,
                  styleName: "Nightwear sets 317",
                  imageSrc: "images/c7IMYbFPleJ2rHzfBfy-y_b5ZB0bYa6PUyGRDN45HbM.png",
                  prompt: "Yong Asian Woman, Romper Pajama Set, cozy romper for comfy sleep"
                },
                {
                  no: 318,
                  styleName: "Nightwear sets 318",
                  imageSrc: "images/Aaq7nEhlMawf6umirie8fsnEYrFCe-1cfiBhjMiAI5k.jpg",
                  prompt: "Round Neck Pajama Set, round neck pajama set, comfy and cute"
                },
                {
                  no: 319,
                  styleName: "Nightwear sets 319",
                  imageSrc: "images/5YT3D1X-TJ62zEBSjqQt3DmFcD8LDAAoCya-5UC72u4.jpg",
                  prompt: "Satin Pajama Set, satin pajama set, smooth and shiny"
                },
                {
                  no: 320,
                  styleName: "Nightwear sets 320",
                  imageSrc: "images/p2oopFQ2lqhrBjnf93Qjx7-_arrWsivoQjA81865ac4.jpg",
                  prompt: "Satin Robe Night Suit, satin robe for added elegance"
                },
                {
                    no: 321,
                    styleName: "Quilted Nightwear Night Suit",
                    imageSrc: "images/-Jq7mzHmk-Imsrup8N563s3nml-iicyj2O6mb5-kLbw.jpg",
                    prompt: "Quilted Nightwear Night Suit, quilted nightwear, warm, plush"
                  },
                  {
                    no: 322,
                    styleName: "Quilted Pajama Set",
                    imageSrc: "images/g4vJSC5sbUdN9WoIwJyp9T5hyBOP17j5L5k3Hkvhx9g.jpg",
                    prompt: "Quilted Pajama Set, Provides extra warmth with a quilted design"
                  },
                  {
                    no: 323,
                    styleName: "Recycled Polyester Nightwear Night Suit",
                    imageSrc: "images/DXkHtVpYBLjoQu_JKBivdUye8e9aRPlo_fPzwqeqdYA.jpg",
                    prompt: "Recycled Polyester Nightwear Night Suit, recycled nightwear, eco-conscious, sustainable"
                  },
                  {
                    no: 324,
                    styleName: "Relaxed Fit Pajama Pants",
                    imageSrc: "images/DW_K8RiNsSZNCG2hkN4VSKKEpA2SBP6r-4lYtxT2ZKw.jpg",
                    prompt: "Relaxed Fit Pajama Pants, Loose-fitting pants for ultimate comfort"
                  },
                  {
                    no: 325,
                    styleName: "Retro Style Nightwear Night Suit",
                    imageSrc: "images/xcvayUTrlkcfC0VTfQLYOZ-p1_0MqM0I6Ra2ySRU-8c.jpg",
                    prompt: "Retro Style Nightwear Night Suit, retro style nightwear, vintage, nostalgic"
                  },
                  {
                    no: 326,
                    styleName: "Robe and Nightgown Set",
                    imageSrc: "images/hW2Zys8FFwA3byNVjeA2I0S6ZWl6I3NPVbZfHLlWPw8.jpg",
                    prompt: "Robe and Nightgown Set, A matching set with a nightgown and robe"
                  },
                  {
                    no: 327,
                    styleName: "Ruffle Hem Nightdress Night Suit",
                    imageSrc: "images/e-PNJ43ygtgqzXsTX_9yUR_5LSa0iCvYtN8WzCjpjf4.jpg",
                    prompt: "Ruffle Hem Nightdress Night Suit, ruffle hem nightdress, playful, night suit"
                  },
                  {
                    no: 328,
                    styleName: "Ruffled Nightgown",
                    imageSrc: "images/2JCmxwIQD-fOrqodnw5YYTv8Pv-jdLInAuui91uwXTk.jpg",
                    prompt: "Ruffled Nightgown, Features ruffle details for a feminine look"
                  },
                  {
                    no: 329,
                    styleName: "Satin Night Suit",
                    imageSrc: "images/sHAZMLXbY1T6DrL3n8cv5eaWQxLndreDtX8hcDmzYmU.jpg",
                    prompt: "Satin Night Suit, Smooth, shiny fabric for elegance and comfort"
                  },
                  {
                    no: 330,
                    styleName: "Scoop Neck Sleep Dress",
                    imageSrc: "images/B1CtPn3yb9pTd3NqmPej6GkUqCEhBXHf6nTAjB697fQ.jpg",
                    prompt: "Scoop Neck Sleep Dress, Featuring a scoop neck for casual wear"
                  },
                  {
                    no: 331,
                    styleName: "Nightwear sets 331",
                    imageSrc: "images/RjS4vTJjwQWfcwNsF_GOrACW3QTl6dosT9l7OZaq03M.jpg",
                    prompt: "Seersucker Pajamas, Lightweight and slightly crinkled fabric, often striped,"
                  },
                  {
                    no: 332,
                    styleName: "Nightwear sets 332",
                    imageSrc: "images/5s75kwHUd9Pr-82Lq-ovw4D8tpYqEcHz11h3HcDOxec.jpg",
                    prompt: "Sequin Detail Nightgown Night Suit, sequin detail nightgown, glamorous, sparkly,"
                  },
                  {
                    no: 333,
                    styleName: "Nightwear sets 333",
                    imageSrc: "images/f2icgklk3mLtKQ4x14jJyusKVBB1ozqxyrA3ouDlYUY.jpg",
                    prompt: "Shapewear Pajamas Night Suit, shapewear pajamas, supportive, slimming,"
                  },
                  {
                    no: 334,
                    styleName: "Nightwear sets 334",
                    imageSrc: "images/ErXsX0Dw8E0YVly8JvpnwmAlNHXS-08H8-ql0NVQQCo.jpg",
                    prompt: "Short Set, A two-piece set with a shirt and shorts,"
                  },
                  {
                    no: 335,
                    styleName: "Nightwear sets 335",
                    imageSrc: "images/ONIF1EwGcO1lAxxL8eG1ZSjD8gQ4Q4XnzwxabN4e51E.jpg",
                    prompt: "Side Slit Nightgown Night Suit, side slit nightgown, stylish, relaxed,"
                  },
                  {
                    no: 336,
                    styleName: "Nightwear sets 336",
                    imageSrc: "images/spzJ9BTgkqQfqIwMuomImRaFvQiqW-NkpxtF8YmBxIg.jpg",
                    prompt: "Silk Pajamas, Luxurious silk material for a soft and cool touch,"
                  },
                  {
                    no: 337,
                    styleName: "Nightwear sets 337",
                    imageSrc: "images/NBd4knUG0Z6lk-F-NNU7gxi_QiSVQJ3wkvDyLYQesZA.jpg",
                    prompt: "Sleep Dress, Casual dress style for sleeping, similar to a long t-shirt,"
                  },
                  {
                    no: 338,
                    styleName: "Nightwear sets 338",
                    imageSrc: "images/PPuk3G-0oLiN9SKkNzUMf92QROAS5YmwkOICRbxK7e8.jpg",
                    prompt: "Sleep-enhancing Fabric Pajamas Night Suit, sleep-enhancing fabric pajamas, restful, innovative,"
                  },
                  {
                    no: 339,
                    styleName: "Nightwear sets 339",
                    imageSrc: "images/xdHw58yW8OJ1XGvjD_4eFMkigeOQfqBeborxUerm-jE.jpg",
                    prompt: "Smocked Nightdress Night Suit, smocked nightdress, textured, charming,"
                  },
                  {
                    no: 340,
                    styleName: "Nightwear sets 340",
                    imageSrc: "images/U9s06SaUGqFoIxF27cS_zjT7nnJwvfrS2K1ruxjnde0.jpg",
                    prompt: "Spaghetti Strap Pajamas Night Suit, spaghetti strap pajamas, light, airy,"
                  },
                  {
                    no: 341,
                    styleName: "Nightwear sets 341",
                    imageSrc: "images/lLjw93fIXdZmjdKErwbcHGZSqEMXEd8sHByf9B76NKk.jpg",
                    prompt: "Square Neck Nightgown Night Suit, square neck nightgown, geometric style, refined,"
                  },
                  {
                    no: 342,
                    styleName: "Nightwear sets 342",
                    imageSrc: "images/jraiUj9oVcNu6CmvU7ST60QQ7o2deoqpkTs9IoYiYAQ.jpg",
                    prompt: "Star Pattern Pajamas Night Suit, star pattern pajamas, night suit, dreamy,"
                  },
                  {
                    no: 343,
                    styleName: "Nightwear sets 343",
                    imageSrc: "images/j3UvTTNaulLyaaUa847Lh3SvCgeFfv3Kr0kl9wI2xfk.jpg",
                    prompt: "Strapless Nightwear Night Suit, strapless nightwear, chic, contemporary,"
                  },
                  {
                    no: 344,
                    styleName: "Nightwear sets 344",
                    imageSrc: "images/mN4-DJMdfnjCCfk4TI2LHYvohu_jdwSOYh92UE9VHEc.jpg",
                    prompt: "Stress-relief Pajamas Night Suit, stress-relief fabric pajamas, relaxing, comfortable,"
                  },
                  {
                    no: 345,
                    styleName: "Nightwear sets 345",
                    imageSrc: "images/XajWN_z3RFYerNjFQF5S94sQox9RqAwZUNUyL-w92eg.jpg",
                    prompt: "Stretch Fabric Pajamas Night Suit, stretch fabric pajamas, flexible, accommodating,"
                  },
                  {
                    no: 346,
                    styleName: "Nightwear sets 346",
                    imageSrc: "images/8BS5Tp1Tv3NuxBRF4EjW5QF8LN4HQvkO9dAQCf6CrHw.jpg",
                    prompt: "Stripe Print Nightwear Night Suit, stripe print nightwear, night suit, classic style,"
                  },
                  {
                    no: 347,
                    styleName: "Nightwear sets 347",
                    imageSrc: "images/qpvnB2MYxVzLG6C_mbBqtdG1FXOeqKDGSPOxsP5yrDE.jpg",
                    prompt: "Striped Pajamas, Classic stripes for a timeless look,"
                  },
                  {
                    no: 348,
                    styleName: "Nightwear sets 348",
                    imageSrc: "images/ldOG1EIe9khbsW8AYSqFIDXeXwg3g5S0mVxYe-hbig4.jpg",
                    prompt: "T-shirt and Pajama Pants, Casual combo for everyday comfort,"
                  },
                  {
                    no: 349,
                    styleName: "Nightwear sets 349",
                    imageSrc: "images/ltByUTboC9UNN8HAQQyQ_h8u0sUnFmaYAVX9yI0Ca3s.jpg",
                    prompt: "Tapered Leg Pajama Pants Night Suit, tapered leg pajama pants, stylish, snug,"
                  },
                  {
                    no: 350,
                    styleName: "Nightwear sets 350",
                    imageSrc: "images/qh07c6BgLClk0j6zZiKJWcH_CQeEGHOLALfsv1rwZ5I.jpg",
                    prompt: "Tencel Pajama Set Night Suit, tencel pajama set, soft, sustainable,"
                  },
                  
                  
                            
// ... and so on
        {
        no: 574,
        styleName: "Sleepwear Animals sets 574",
        imageSrc: "images/7QI8ov5Z4X9mjnMBIyRebjfLdupAIU663QtXfmrclD4.jpg",
        prompt: "Panda Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 575,
        styleName: "Sleepwear Animals sets 575",
        imageSrc: "images/SQkNKD2wZ5LrXyRCeIJNwvvlKPtbl3jMAQexJlWUaRA.jpg",
        prompt: "Cat Ears Hoodie Pajama, Asian Young Woman"
    },
    
    {
        no: 576,
        styleName: "Sleepwear Animals sets 576",
        imageSrc: "images/FEhuYjM5BO2pxZ-ofXst3Mie9Gzs0vNYjG2bUSSvdB4.jpg",
        prompt: "Elephant Pattern Nightshirt, Asian Young Woman"
    },
    
    {
        no: 577,
        styleName: "Sleepwear Animals sets 577",
        imageSrc: "images/OMkHdFoFLTytWKDUsvQZESsU00D4i7INecnHzrz3SCE.jpg",
        prompt: "Dog Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 578,
        styleName: "Sleepwear Animals sets 578",
        imageSrc: "images/b5Z4OFk7G3PZm9ArZLWPSjaJO8vU1waafeu_Kxx8V5A.jpg",
        prompt: "Unicorn Embellished Nightdress, Asian Young Woman"
    },
    
    {
        no: 579,
        styleName: "Sleepwear Animals sets 579",
        imageSrc: "images/W2IypATbfpjAw3mzbbT_zDV7ZQzN7KwZbfZpfj4nQHI.jpg",
        prompt: "Giraffe Spot Pajamas, Asian Young Woman"
    },
    
    {
        no: 580,
        styleName: "Sleepwear Animals sets 580",
        imageSrc: "images/zA35s7HlpiJGOSm5gbfH-HRkV7HHjUw0oAdt7qH2xa0.jpg",
        prompt: "Penguin Print Flannel PJs, Asian Young Woman"
    },
    
    {
        no: 581,
        styleName: "Sleepwear Animals sets 581",
        imageSrc: "images/eSPHY4wAE8-EWNMesyx_nfDwGiX42ncA0vGuz0j9vTI.jpg",
        prompt: "Owl Graphic T-Shirt + Shorts, Asian Young Woman"
    },
    
    {
        no: 582,
        styleName: "Sleepwear Animals sets 582",
        imageSrc: "images/c7YwitgzCLjX91r9P_mTu2e4VwvT-YG8rEI8_RAamYU.jpg",
        prompt: "Whale Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 583,
        styleName: "Sleepwear Animals sets 583",
        imageSrc: "images/_cfr5dcXnBoQCD-jNyfXfYv4LJVAIdl9LzfvFDDd0ow.jpg",
        prompt: "Bunny Ears Sleep Top + Pants, Asian Young Woman"
    },
    
    {
        no: 584,
        styleName: "Sleepwear Animals sets 584",
        imageSrc: "images/XNVMEgOJeK4i23fXsC97VZh_3USx7kM79WOhcOco34s.jpg",
        prompt: "Mermaid Scale Pajama Set, Asian Young Woman"
    },
    
    {
        no: 585,
        styleName: "Sleepwear Animals sets 585",
        imageSrc: "images/BPEINWUgPoqNDkzbrNIGL6c9ubjmbPNAN9_qShCfYSg.jpg",
        prompt: "Leopard Print Nightgown, Asian Young Woman"
    },
    
    {
        no: 586,
        styleName: "Sleepwear Animals sets 586",
        imageSrc: "images/PTtFaUy7pOuGFoeSs6OIYLGcdfwXYcGhZwVcN1Lm_C4.jpg",
        prompt: "Tiger Stripe Pajamas, Asian Young Woman"
    },
    
    {
        no: 587,
        styleName: "Sleepwear Animals sets 587",
        imageSrc: "images/l0zRgsEeT6eArYcuiZdl7MKaVOsFsBuAdspEJZOpj8E.jpg",
        prompt: "Flamingo Print Sleep Set, Asian Young Woman"
    },
    
    {
        no: 588,
        styleName: "Sleepwear Animals sets 588",
        imageSrc: "images/IPA3t9cHK8plxuHx0ZFXzwTHiLiibr7OgCJh_phnmag.jpg",
        prompt: "Koala Bear Pajama Set, Asian Young Woman"
    },
    
    {
        no: 589,
        styleName: "Sleepwear Animals sets 589",
        imageSrc: "images/ZXIr7DF_qeUjKaFa5ecs_uOTAUlpKg4KzDhLmcyoGVc.jpg",
        prompt: "Zebra Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 590,
        styleName: "Sleepwear Animals sets 590",
        imageSrc: "images/SGWjsahSd90dvvwuSjOYREBDvrkafog6SoU51CY-g0U.jpg",
        prompt: "Duck Print Nightshirt, Asian Young Woman"
    },
    
    {
        no: 591,
        styleName: "Sleepwear Animals sets 591",
        imageSrc: "images/LuOJrGWaQIGM6NbxKb6YcfG4IpnK76MFFh2rUyHkPoc.jpg",
        prompt: "Butterfly Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 592,
        styleName: "Sleepwear Animals sets 592",
        imageSrc: "images/4QUnVGNNyx2s7uwa-Dltg1qmYoAmK1_qBw7VWP2y66k.jpg",
        prompt: "Llama Graphic T-Shirt + Shorts, Asian Young Woman"
    },
    
    {
        no: 593,
        styleName: "Sleepwear Animals sets 593",
        imageSrc: "images/WdgLF2FIzbA1wrE2zQKEjwCcYVesKBs61fSstcPQZl0.jpg",
        prompt: "Bear Paw Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 594,
        styleName: "Sleepwear Animals sets 594",
        imageSrc: "images/cz3u5c1bA68Ky03B7lrGkqYkhqTAmX5n1yFzToZCeJg.jpg",
        prompt: "Fox Face Sleep Set, Asian Young Woman"
    },
    
    {
        no: 595,
        styleName: "Sleepwear Animals sets 595",
        imageSrc: "images/gERt5wvCA8Mv3KgPqHTuRfZu4naCfzSPPNnsf6qcK14.jpg",
        prompt: "Fish Print Nightgown, Asian Young Woman"
    },
    
    {
        no: 596,
        styleName: "Sleepwear Animals sets 596",
        imageSrc: "images/wLbNT9VMzIi5Ei1LRPqhLR3Fh-uAcPasK-d12AiZzww.jpg",
        prompt: "Dolphin Pajama Set, Asian Young Woman"
    },
    
    {
        no: 597,
        styleName: "Sleepwear Animals sets 597",
        imageSrc: "images/5Rsxrtuc6wQKPorZeVOV2ta9HqkIoTfZNU7nJmKNL0c.jpg",
        prompt: "Hedgehog Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 598,
        styleName: "Sleepwear Animals sets 598",
        imageSrc: "images/jJ_tcXk4ahcGefSMoB3hFpb6xgi5Rmmeu-lXfZqRn10.jpg",
        prompt: "Parrot Print Nightshirt, Asian Young Woman"
    },
    
    {
        no: 599,
        styleName: "Sleepwear Animals sets 599",
        imageSrc: "images/LqpqKBquNAnNSG5gFqNwPvlMFV7ApWYcS-apGBOr_Ho.jpg",
        prompt: "Snail Graphic Pajama Set, Asian Young Woman"
    },
    
    {
        no: 600,
        styleName: "Sleepwear Animals sets 600",
        imageSrc: "images/wGsGL8ZNHPKh-tB9Tl99eMpLKfOdPPTAQEUATah_0pg.jpg",
        prompt: "Deer Print Flannel Pajamas, Asian Young Woman"
    },
    {
        no: 601,
        styleName: "Sleepwear Animals sets 601",
        imageSrc: "images/dEIFl3y5pSjsdylfIy9qOxM3AVNQNGkJxj97sOqG3e4.jpg",
        prompt: "Sloth Pocket Pajama Set, Asian Young Woman"
    },
    
    {
        no: 602,
        styleName: "Sleepwear Animals sets 602",
        imageSrc: "images/ONc2jZDyLEjJAAFFAryft7BiAKf86bPlJ2gmQt8qyjU.jpg",
        prompt: "Bee Embellished Sleep Set, Asian Young Woman"
    },
    
    {
        no: 633,
        styleName: "Sleepwear Animals sets 633",
        imageSrc: "images/UwH08Mh53CBp6ZCyz8rR2jYlPE1kESWq7nn9gPwghEA.jpg",
        prompt: "Chameleon Graphic Pajamas, Asian Young Woman"
    },
    
    {
        no: 634,
        styleName: "Sleepwear Animals sets 634",
        imageSrc: "images/MGjAwV5XMm6n6BQKsU3cPDhfTHHhWF9pzaJq6HgGPwA.jpg",
        prompt: "Jellyfish Pattern Pajama Set, Asian Young Woman"
    },
    
    {
        no: 635,
        styleName: "Sleepwear Animals sets 635",
        imageSrc: "images/fL5JkEW_itWdmnpcawMg5wHUHgaCB0qteaRSGDmikX8.jpg",
        prompt: "Ladybug Graphic Nightshirt, Asian Young Woman"
    },
    
    {
        no: 636,
        styleName: "Sleepwear Animals sets 636",
        imageSrc: "images/3XdINhJIOJZCUIh5Co_zgOipUggylw8KY7DzhNxKT7c.jpg",
        prompt: "Flamingo Trim Sleep Set, Asian Young Woman"
    },
    
    {
        no: 637,
        styleName: "Sleepwear Animals sets 637",
        imageSrc: "images/7cgfzDuCgX3xcu9N20Ed7PEhHkVWWR2j_vL2s0sYDNc.jpg",
        prompt: "Panda Ears Onesie Pajamas, Asian Young Woman"
    },
    
    {
        no: 638,
        styleName: "Sleepwear Animals sets 638",
        imageSrc: "images/FhGuKJ9SZg0ggNkR2tsKHw5FHEdneF1P7fI4L5sVxfo.jpg",
        prompt: "Fox Graphic Pajama Set, Asian Young Woman"
    },
    
    {
        no: 639,
        styleName: "Sleepwear Animals sets 639",
        imageSrc: "images/J6yosakPNJYKcuR508p66fyxh49ZIGn6AQOvsQa33b4.jpg",
        prompt: "Owl Print Nightshirt + Pants, Asian Young Woman"
    },
    
    {
        no: 640,
        styleName: "Sleepwear Animals sets 640",
        imageSrc: "images/ptQ0P67KoxW9jLsgKUqhxhUo-qn3WXdYz4UPMhmHz30.jpg",
        prompt: "Giraffe Pattern Sleep Top + Shorts, Asian Young Woman"
    },
    
    {
        no: 641,
        styleName: "Sleepwear Animals sets 641",
        imageSrc: "images/c-qeEPajMmCX1e_fcSXGlY7pLyTGXI8NxZvjQs9Wddc.jpg",
        prompt: "Starfish Graphic Pajamas, Asian Young Woman"
    },
    
    {
        no: 642,
        styleName: "Sleepwear Animals sets 642",
        imageSrc: "images/NQYGBely0-QHZezDF8l8dODNjn-AtCVLMGaraKK7zYs.jpg",
        prompt: "Beetle Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 643,
        styleName: "Sleepwear Animals sets 643",
        imageSrc: "images/xpFmUCYlE7G16wSkzrhb9FDrOYzz5DUrBUsLjt7ubqY.jpg",
        prompt: "Flamingo Frill Pajamas, Asian Young Woman"
    },
    
    {
        no: 644,
        styleName: "Sleepwear Animals sets 644",
        imageSrc: "images/5OcDQwtKlT7HCvljWsD2XDTLdIFFtM3g64Wf1hJpASo.jpg",
        prompt: "Unicorn Tie-Dye Nightdress, Asian Young Woman"
    },
    
    {
        no: 645,
        styleName: "Sleepwear Animals sets 645",
        imageSrc: "images/Hs798zorPLzybi648Mc9EUB2TOTJxY7-FaFB8mPmTa4.jpg",
        prompt: "Dolphin Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 646,
        styleName: "Sleepwear Animals sets 646",
        imageSrc: "images/c2oWppgNVDnOwrl7P9Ct41KfWOJeSTKsBs5UFOEcgMM.jpg",
        prompt: "Teddy Bear Graphic Sleep Top + Pants, Asian Young Woman"
    },
    
    {
        no: 647,
        styleName: "Sleepwear Animals sets 647",
        imageSrc: "images/nG0T-mmEXU5qJGxKNG3juA3PnALdvVPvMsAzfZCIk7Q.jpg",
        prompt: "Robin Print Nightshirt, Asian Young Woman"
    },
    
    {
        no: 648,
        styleName: "Sleepwear Animals sets 648",
        imageSrc: "images/0048W9t3y6IsjQ6bieaNwFU6czLeOFwcpHEXfHpjH8E.jpg",
        prompt: "Bamboo Panda Pajama Set, Asian Young Woman"
    },
    
    {
        no: 649,
        styleName: "Sleepwear Animals sets 649",
        imageSrc: "images/YuV6Q7neeSPUIs39AEugSW_2Wg0ISMWs8otoo-CLSyU.jpg",
        prompt: "Trout Graphic Pajamas, Asian Young Woman"
    },
    
    {
        no: 650,
        styleName: "Sleepwear Animals sets 650",
        imageSrc: "images/Fm50nd1KQENZsaKoaT1ViHWAwEb0Y1XFDOgmO21zPMQ.jpg",
        prompt: "Sparrow Print Sleep Set, Asian Young Woman"
    },
    {
        no: 651,
        styleName: "Sleepwear Animals sets 651",
        imageSrc: "images/E_mU3UGInCRhGYIr3wSSpYCjL7BqwBwrkSrjA3HMqFA.jpg",
        prompt: "Cheetah Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 652,
        styleName: "Sleepwear Animals sets 652",
        imageSrc: "images/8gT3boiSMv_I_rRwIWjewrfQYpxD_yVpqWttpFPUx8w.jpg",
        prompt: "Snail Ruffle Trim Nightgown, Asian Young Woman"
    },
    
    {
        no: 653,
        styleName: "Sleepwear Animals sets 653",
        imageSrc: "images/VWFI7I0CoSJN7HGPg3r8IYZAWzDs0Hs1V8ydnklnJAg.jpg",
        prompt: "Badger Flannel PJs, Asian Young Woman"
    },
    
    {
        no: 654,
        styleName: "Sleepwear Animals sets 654",
        imageSrc: "images/ikXb9lqOAcJTvB1bKP-VLXpQaLvkCRmPCuh8fjrM0_c.jpg",
        prompt: "Rabbit Ears Fluffy Hoodie + Pants, Asian Young Woman"
    },
    
    {
        no: 655,
        styleName: "Sleepwear Animals sets 655",
        imageSrc: "images/fHD-R9pgKQcliQlLgUgGs_rjKnqJaWkUqys7gJMuUqs.jpg",
        prompt: "Koala Leaf Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 656,
        styleName: "Sleepwear Animals sets 656",
        imageSrc: "images/jEzvvzL9-D0GivchwxEbvPaOP_bbwCx9vX8u5Kjnn7c.jpg",
        prompt: "Cat Nap Sleeveless Nightgown, Asian Young Woman"
    },
    
    {
        no: 657,
        styleName: "Sleepwear Animals sets 657",
        imageSrc: "images/trq3o0hGSldCZ4o85KlvmmSrTQKKBevL6fCThVMCR6Y.jpg",
        prompt: "Armadillo Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 658,
        styleName: "Sleepwear Animals sets 658",
        imageSrc: "images/SU8Dy_RCj1TiSOycOTTVsiAVetE1IvPNISyxtf8Tcsw.jpg",
        prompt: "Hedgehog Hoodie Pajama Set, Asian Young Woman"
    },
    
    {
        no: 659,
        styleName: "Sleepwear Animals sets 659",
        imageSrc: "images/kRBNQwVLL0zrMUTcXW3dqnBUtdJDncAvB98Ftk-mFLs.jpg",
        prompt: "Owl Feather Pajama Top + Pants, Asian Young Woman"
    },
    
    {
        no: 660,
        styleName: "Sleepwear Animals sets 660",
        imageSrc: "images/WI5_NFemtR38UTN76X8Rc4UnXseXG_MUr1ukED4JFUk.jpg",
        prompt: "Rhino Graphic Pajamas, Asian Young Woman"
    },
    
    {
        no: 661,
        styleName: "Sleepwear Animals sets 661",
        imageSrc: "images/wSY9zQvp03ZWBQIm3Iq3yebqZn9EKUb3PaBJS1xW01Q.jpg",
        prompt: "Chick Print Pajama Dress, Asian Young Woman"
    },
    
    {
        no: 662,
        styleName: "Sleepwear Animals sets 662",
        imageSrc: "images/9-TtlhlRnP7L_5yhU2zidB15uTiTUDXfzUFV6ykssqM.jpg",
        prompt: "Goldfish Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 663,
        styleName: "Sleepwear Animals sets 663",
        imageSrc: "images/2lgo0MPXYedTtOi9dmwaYSjnpa9KVoqkUhNdyB3GEd0.jpg",
        prompt: "Swallow Print Sleep Top + Shorts, Asian Young Woman"
    },
    
    {
        no: 664,
        styleName: "Sleepwear Animals sets 664",
        imageSrc: "images/wu8ADsG0l9UiR4_KeTiiHdGjgza8ayQhQRt4t4xwBdQ.jpg",
        prompt: "Peacock Tail Pajama Set, Asian Young Woman"
    },
    
    {
        no: 665,
        styleName: "Sleepwear Animals sets 665",
        imageSrc: "images/Xyc-1nWjQl8itgMtXe5tH4jsgAjdkWq1MQ23E2Ekvwc.jpg",
        prompt: "Elephant Foot Pajamas, Asian Young Woman"
    },
    
    {
        no: 666,
        styleName: "Sleepwear Animals sets 666",
        imageSrc: "images/ItIzJAeS7WZu3Ff4912CWOS8rBOt11-TIKmdvMvK3CQ.jpg",
        prompt: "Panda Print Fleece Onesie, Asian Young Woman"
    },
    
    {
        no: 667,
        styleName: "Sleepwear Animals sets 667",
        imageSrc: "images/knjP09gZDDHUhQDeo5N6_oEzKTArCNH8-6nZNLVBv7E.jpg",
        prompt: "Hedgehog Graphic Nightshirt, Asian Young Woman"
    },
    
    {
        no: 668,
        styleName: "Sleepwear Animals sets 668",
        imageSrc: "images/fLkD8E8LhkD5934P9tg2cIAC-VnQKW1Pa0m5C5mVcOM.jpg",
        prompt: "Owl Nightgown + Eye Mask, Asian Young Woman"
    },
    
    {
        no: 669,
        styleName: "Sleepwear Animals sets 669",
        imageSrc: "images/CcIGtl5pIrqkMzFqjw9j9nKEciCesMoQaff16SdGExo.jpg",
        prompt: "Giraffe Neck Pajama Set, Asian Young Woman"
    },
    
    {
        no: 670,
        styleName: "Sleepwear Animals sets 670",
        imageSrc: "images/HI3uxU1mFQOD42vwz1ZeoxKBNldPl3e-3ejoTsOLwxo.jpg",
        prompt: "Fox Socks + Pajama Set, Asian Young Woman"
    },
    
    {
        no: 671,
        styleName: "Sleepwear Animals sets 671",
        imageSrc: "images/pO8w-XYIWwCecHw-VDlmA8UP7hlJjO7aJwQyQOPKoh8.jpg",
        prompt: "Turtle Pillowcase + PJ Set, Asian Young Woman"
    },
    
    {
        no: 672,
        styleName: "Sleepwear Animals sets 672",
        imageSrc: "images/VcyAu9vh7dsUT8EDMWAK_GmFlya-fIWaDfJjyEDwhCk.jpg",
        prompt: "Wolf Print Pajama Pants + Top, Asian Young Woman"
    },
    
    {
        no: 673,
        styleName: "Sleepwear Animals sets 673",
        imageSrc: "images/3rJBOKNZZ92gzOnNGr8jD_CmnQpnZitqToFNEklHHZE.jpg",
        prompt: "Bunny Slippers + Pajamas, Asian Young Woman"
    },
    
    {
        no: 674,
        styleName: "Sleepwear Animals sets 674",
        imageSrc: "images/HQbpP5Az_AJgVIztEuMV4sMwBlwt_ijTIZbvH5AR-PY.jpg",
        prompt: "Ladybird Print Nightshirt, Asian Young Woman"
    },
    
    {
        no: 675,
        styleName: "Sleepwear Animals sets 675",
        imageSrc: "images/QaGE8Lw4e7LknmPs0Lvg5zB9bmBao1JRCkDvcu-0BPU.jpg",
        prompt: "Squirrel Pattern Pajama Set, Asian Young Woman"
    },
    
    {
        no: 676,
        styleName: "Sleepwear Animals sets 676",
        imageSrc: "images/mZjrpUT4pGOxdCrtRyvhlzjAy0NSl5zgdRSKTDRzfac.jpg",
        prompt: "Parrot Print Pajama Shorts + Top, Asian Young Woman"
    },
    
    {
        no: 677,
        styleName: "Sleepwear Animals sets 677",
        imageSrc: "images/TDZrWXjOitAhYIhE8qD5Yb3UBxbx1PQuRKf3GB4yHMA.jpg",
        prompt: "Peacock Pajama Set, Asian Young Woman"
    },
    
    {
        no: 678,
        styleName: "Sleepwear Animals sets 678",
        imageSrc: "images/snbtYetQNkicbTmwhLKWTd-EmNRI3c6k9H5SU99k3i4.jpg",
        prompt: "Camel Graphic Nightgown, Asian Young Woman"
    },
    
    {
        no: 679,
        styleName: "Sleepwear Animals sets 679",
        imageSrc: "images/L23nAWSuebJt41bFUuBuE0G6dd5LpTsArb3xD5ZOEVQ.jpg",
        prompt: "Octopus Flannel Pajamas, Asian Young Woman"
    },
    
    {
        no: 680,
        styleName: "Sleepwear Animals sets 680",
        imageSrc: "images/L_ZEuD7tM-67Y7wcMOkWsJY1hyEvB7f-0tI6LR19Q_A.jpg",
        prompt: "Koala Ears Pajama Hoodie, Asian Young Woman"
    },
    
    {
        no: 681,
        styleName: "Sleepwear Animals sets 681",
        imageSrc: "images/aiGFvwA7nKmeWJzSZkhntQowoRg_tHzRpbSLjlxPEnY.jpg",
        prompt: "Leopard Spot Sleep Set, Asian Young Woman"
    },
    
    {
        no: 682,
        styleName: "Sleepwear Animals sets 682",
        imageSrc: "images/Ln4s2tIUnIyye_DbCaK0l4gm-c-pWzGxKiG1ESAFGL4.jpg",
        prompt: "Moose Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 683,
        styleName: "Sleepwear Animals sets 683",
        imageSrc: "images/z4tpwY9rD8tWh8mxgQRQNTGaeffvfugQcLb-fAkKzpI.jpg",
        prompt: "Bumblebee Pajamas, Asian Young Woman"
    },
    
    {
        no: 684,
        styleName: "Sleepwear Animals sets 684",
        imageSrc: "images/-uE8BabDHlNF91Me3gLrkbxka-IxvKg8L120NumuOrI.jpg",
        prompt: "Badger Pattern Nightshirt, Asian Young Woman"
    },
    
    {
        no: 685,
        styleName: "Sleepwear Animals sets 685",
        imageSrc: "images/T9rYhjTuLxJhsAV65kcTUH8J8RQaLD2m_TU5OqYqNVU.jpg",
        prompt: "Dragon Graphic Pajama Set, Asian Young Woman"
    },
    
    {
        no: 686,
        styleName: "Sleepwear Animals sets 686",
        imageSrc: "images/iTtYpZddv6d4bPmHnWYH3C5gYmbrm4oOrwZEVh5ONZQ.jpg",
        prompt: "Owl Hoodie Pajama Set, Asian Young Woman"
    },
    
    {
        no: 687,
        styleName: "Sleepwear Animals sets 687",
        imageSrc: "images/GYIbRLrM_ACwQQyOFKf-EtM5VnH3mVTl93febaKeJto.jpg",
        prompt: "Frog Pajama Set, Asian Young Woman"
    },
    
    {
        no: 688,
        styleName: "Sleepwear Animals sets 688",
        imageSrc: "images/dZapuwXqa0PSWT-q7C-I5oNCye9cY31F3BJ7zN--iyU.jpg",
        prompt: "Turtle Print Lounge Dress, Asian Young Woman"
    },
    
    {
        no: 689,
        styleName: "Sleepwear Animals sets 689",
        imageSrc: "images/FJwa9fGyPyhk4Qc9A6zdJVTedw0T7nr1P-0lVHK4K3M.jpg",
        prompt: "Fluttering Bird Pajamas, Asian Young Woman"
    },
    
    {
        no: 690,
        styleName: "Sleepwear Animals sets 690",
        imageSrc: "images/5Ev8ujfVX67cEkbwrKlwFcemi-Rt5QBB20mLXbmKhzQ.jpg",
        prompt: "Dolphin Ears Hoodie + Nightgown, Asian Young Woman"
    },
    
    {
        no: 691,
        styleName: "Sleepwear Animals sets 691",
        imageSrc: "images/TR-o4NiTNYIukuaIcbnQ0dMsRdSVwW_yT1e4YbqTD2Q.jpg",
        prompt: "Bear Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 692,
        styleName: "Sleepwear Animals sets 692",
        imageSrc: "images/SsRK5CSO0KMz2Z_vejD96Ly3vvtHhzVzlOOlzeaWRrU.jpg",
        prompt: "Starfish Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 693,
        styleName: "Sleepwear Animals sets 693",
        imageSrc: "images/PZYD318EOjC6nf7oHfvlE09pMVh7s998XKpH_pPUta0.jpg",
        prompt: "Cat Ears Plush Hoodie + Pants, Asian Young Woman"
    },
    
    {
        no: 694,
        styleName: "Sleepwear Animals sets 694",
        imageSrc: "images/DINNepexM3EO44y_hJBu5qXxvo0xPPdwQ4PVMslqXjE.jpg",
        prompt: "Sheep Graphic Nightshirt, Asian Young Woman"
    },
    
    {
        no: 695,
        styleName: "Sleepwear Animals sets 695",
        imageSrc: "images/LyCz-gEEmGhJq9dxzSnBU7XGYhro1lKeQgg2OfG68vM.jpg",
        prompt: "Peacock Feather Nightgown, Asian Young Woman"
    },
    
    {
        no: 696,
        styleName: "Sleepwear Animals sets 696",
        imageSrc: "images/_n2RxzWQOMWkDdxcB9bUKZVkzIdU2OrXDWf_lDQ-XhM.jpg",
        prompt: "Zebra Ears Hoodie Pajama, Asian Young Woman"
    },
    
    {
        no: 697,
        styleName: "Sleepwear Animals sets 697",
        imageSrc: "images/KyLXuvXmJ0dqlrzd2E28Kcjj6B94Dm_cx4R049OG2-8.jpg",
        prompt: "Whale Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 698,
        styleName: "Sleepwear Animals sets 698",
        imageSrc: "images/50U_IaIWbyXkkt1_oa0MG36cs4K3r5_I6V-RCv7bly8.jpg",
        prompt: "Crab Pattern Sleep Top + Briefs, Asian Young Woman"
    },
    
    {
        no: 699,
        styleName: "Sleepwear Animals sets 699",
        imageSrc: "images/N4dw_kETq-ALXS9Tt62AUj4hXZYTo2yMo-kB8jKwI9c.jpg",
        prompt: "Flamingo Ruffle Pajama, Asian Young Woman"
    },
    
    {
        no: 700,
        styleName: "Sleepwear Animals sets 700",
        imageSrc: "images/FkKNP9tQVMFLWa36SN0EMzTdaJasrZMatQhiMtMHo34.jpg",
        prompt: "Sheep Pajama Set, Asian Young Woman"
    },
    {
        no: 701,
        styleName: "Sleepwear Animals sets 701",
        imageSrc: "images/AwMqoIVbM8TAGcoefhM5A5IfhNI_1uUDXtIZXoNN0JQ.jpg",
        prompt: "Eagle Nightgown, Asian Young Woman"
    },
    
    {
        no: 702,
        styleName: "Sleepwear Animals sets 702",
        imageSrc: "https://placehold.co/50x50",
        prompt: "Rabbit Slippers + Pajama Set, Asian Young Woman"
    },
    
    {
        no: 703,
        styleName: "Sleepwear Animals sets 703",
        imageSrc: "images/TXZhRMys_PSTvEsq84oUvZN7ddQMP7FFwLj9Mdtj6ok.jpg",
        prompt: "Duck Hat + Pajama Set, Asian Young Woman"
    },
    
    {
        no: 704,
        styleName: "Sleepwear Animals sets 704",
        imageSrc: "images/y6QeJM_NDmmJ9wQC6xda8ahPDJgNlqKXddMqqXfLpMs.jpg",
        prompt: "Snail Graphic Nightshirt, Asian Young Woman"
    },
    
    {
        no: 705,
        styleName: "Sleepwear Animals sets 705",
        imageSrc: "images/3IRE3JAVwMJVjc0OmveqBU-i-aJXmbyRPj3Lj9yCUxU.jpg",
        prompt: "Koala Print Nightdress, Asian Young Woman"
    },
    
    {
        no: 706,
        styleName: "Sleepwear Animals sets 706",
        imageSrc: "images/PHhs0MKwRl8TiCPtjlOed39MVSkzCHebcTeCP5LTJ2g.jpg",
        prompt: "Dinosaur Pajama Shorts + Top, Asian Young Woman"
    },
    
    {
        no: 707,
        styleName: "Sleepwear Animals sets 707",
        imageSrc: "images/r86u2EVc1cziktgjzXTlALjwLuzxU1VBvOYNM6mF1wQ.jpg",
        prompt: "Mouse Ears Hooded PJs, Asian Young Woman"
    },
    
    {
        no: 708,
        styleName: "Sleepwear Animals sets 708",
        imageSrc: "images/Qmbe937SRVuswm36uaZOYaJ0pkueODdTy39oSrt7wKs.jpg",
        prompt: "Sheep Pattern Pajama Set, Asian Young Woman"
    },
    
    {
        no: 709,
        styleName: "Sleepwear Animals sets 709",
        imageSrc: "images/2MK1ecWHdVcMiCRXe9_ntvepCGC2kLDe8aZ4ncggV2c.jpg",
        prompt: "Otter Print Pajama Pants + Top, Asian Young Woman"
    },
    
    {
        no: 710,
        styleName: "Sleepwear Animals sets 710",
        imageSrc: "images/bN5plpLXcRDsXnEJURpPhMc32j3c_KJXJds0M1IzSio.jpg",
        prompt: "Starfish Hood + Pajama Dress, Asian Young Woman"
    },
    
    {
        no: 711,
        styleName: "Sleepwear Animals sets 711",
        imageSrc: "images/RCMHw1SW9M-r-MZJ3ixf1DiyJq2cAW5uWILLo4utyQs.jpg",
        prompt: "Bear Hug Graphic Pajama Set, Asian Young Woman"
    },
    
    {
        no: 712,
        styleName: "Sleepwear Animals sets 712",
        imageSrc: "images/mTwoL80n7ZkNAjcU18faQ22TQZFM2aXWFDvkX9qNahY.jpg",
        prompt: "Llama Ears Hoodie Pajamas, Asian Young Woman"
    },
    
    {
        no: 713,
        styleName: "Sleepwear Animals sets 713",
        imageSrc: "images/7PaRLTsGqohbj0woVYgGbLR_K2ZdEvQXwh3yUYSjHfQ.jpg",
        prompt: "Shark Face Pajama Set, Asian Young Woman"
    },
    
    {
        no: 714,
        styleName: "Sleepwear Animals sets 714",
        imageSrc: "images/b736SeTGasqdEJCuAMqlvZdYSU4hu8-hm2ZXxv6c4_I.jpg",
        prompt: "Cat Print Nightgown, Asian Young Woman"
    },
    
    {
        no: 715,
        styleName: "Sleepwear Animals sets 715",
        imageSrc: "images/JwZ2ySVAHfi56hm7AgWFOdRwOeHh6dk1rzyTK2gPV8A.jpg",
        prompt: "Squirrel Pyjama Set, Asian Young Woman"
    },
    
    {
        no: 716,
        styleName: "Sleepwear Animals sets 716",
        imageSrc: "images/94RlyDCm2d6y9BH80_oA6ULu0mstVJcrdZX5qDbBGvo.jpg",
        prompt: "Alpaca Graphic Nightshirt, Asian Young Woman"
    },
    
    {
        no: 717,
        styleName: "Sleepwear Animals sets 717",
        imageSrc: "images/APmnjJjw5BbVILHMpAVvdA_N2gZBCcRu2mVKOtuC_M4.jpg",
        prompt: "Swallow Print Sleep Set, Asian Young Woman"
    },
    
    {
        no: 718,
        styleName: "Sleepwear Animals sets 718",
        imageSrc: "images/7bNCGbewSrwEUvumHfE73I4Boyu8CcIhhMvoyRHqO_w.jpg",
        prompt: "Rhinoceros Pajama Set, Asian Young Woman"
    },
    
    {
        no: 719,
        styleName: "Sleepwear Animals sets 719",
        imageSrc: "images/PltRH2FjQSIEXeEINm4uX4cSdTnaRslgKHq_Wyvo9YI.jpg",
        prompt: "Duck Pajama Dress, Asian Young Woman"
    },
    
    {
        no: 720,
        styleName: "Sleepwear Animals sets 720",
        imageSrc: "images/e4wyQatM9HIjWaCkTF197YnrqEcKDIT8iF8pyd9IWRE.jpg",
        prompt: "Elephant Hoodie Pajama Set, Asian Young Woman"
    },
    
    {
        no: 721,
        styleName: "Sleepwear Animals sets 721",
        imageSrc: "images/GwF7-C_jGexncDbHJA_cKFEVZFh5L9i_fawzK0aXKjg.jpg",
        prompt: "Seal Graphic Pajamas, Asian Young Woman"
    },
    
    {
        no: 722,
        styleName: "Sleepwear Animals sets 722",
        imageSrc: "images/nx0QUbiQt7bL2iEOz2ncO4SMg9SkhBxE4YpWhkDdpPw.jpg",
        prompt: "Weasel Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 723,
        styleName: "Sleepwear Animals sets 723",
        imageSrc: "images/f0U5YSSVnTRM1IPTNnwH_xQgKdOLJDjmE_xSorkfoQM.jpg",
        prompt: "Squirrel Hoodie Pajamas, Asian Young Woman"
    },
    
    {
        no: 724,
        styleName: "Sleepwear Animals sets 724",
        imageSrc: "images/9TJ1UM8nlsV70Di80ShfEmN5lALv2MBBsREI3vxXhJo.jpg",
        prompt: "Ladybug Pajama Dress + Mask, Asian Young Woman"
    },
    
    {
        no: 725,
        styleName: "Sleepwear Animals sets 725",
        imageSrc: "images/L3X4Vgx3ZAodcX4Qehr48o20ib-wgsUj6A_EJT_i-ZU.jpg",
        prompt: "Raccoon Print Nightshirt, Asian Young Woman"
    },
    
    {
        no: 726,
        styleName: "Sleepwear Animals sets 726",
        imageSrc: "images/xNWhqxRBxTWMrpoYuJY6nD2flmenyF_kdyTWQsfzXV8.jpg",
        prompt: "Fox Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 727,
        styleName: "Sleepwear Animals sets 727",
        imageSrc: "images/SOoTaAZg501EfXXh1T2JR-ltCBE8O2PqLIfO6iELugU.jpg",
        prompt: "Panda Bear Point Pajamas, Asian Young Woman"
    },
    
    {
        no: 728,
        styleName: "Sleepwear Animals sets 728",
        imageSrc: "images/CzqL5neN4FWGJjX9bJ6VHYrrR-GKJ0iOBMG3mfZlFxc.jpg",
        prompt: "Dinosaur Hoodie Pajamas, Asian Young Woman"
    },
    
    {
        no: 729,
        styleName: "Sleepwear Animals sets 729",
        imageSrc: "images/TG_d252ntM3MhEFe-ZVvUqKWPp20UcGdjar0PRVS868.jpg",
        prompt: "Peacock Pajama Top + Briefs, Asian Young Woman"
    },
    
    {
        no: 730,
        styleName: "Sleepwear Animals sets 730",
        imageSrc: "images/EjfjOBjqKliH1yWo78EfMeQxeP2dKar3ajKOznJheWo.jpg",
        prompt: "Canary Graphic Pajama Set, Asian Young Woman"
    },
    
    {
        no: 731,
        styleName: "Sleepwear Animals sets 731",
        imageSrc: "images/8jAkmVAjChr8ehfR6XEeyT2yRG6bk4e03APD2-4l2Ic.jpg",
        prompt: "Sheep Woven Shirt + Pants, Asian Young Woman"
    },
    
    {
        no: 732,
        styleName: "Sleepwear Animals sets 732",
        imageSrc: "images/65cIcZVV1fXdzW8poYWThIcSiS3r0qojdcZE1fHBHpI.jpg",
        prompt: "Ocelot Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 733,
        styleName: "Sleepwear Animals sets 733",
        imageSrc: "images/4W-jJeW9nKdB7jQad8qfRzmyEDyFrSfh-NasZOE6U6U.jpg",
        prompt: "Giraffe Hoodie Pajamas, Asian Young Woman"
    },
    
    {
        no: 734,
        styleName: "Sleepwear Animals sets 734",
        imageSrc: "images/mcB8TwolXJjHF4l1ULiyRR4nx9A4Glb1Z44L0rMxaWo.jpg",
        prompt: "Ladybird Plush Hoodie + Pajamas, Asian Young Woman"
    },
    
    {
        no: 735,
        styleName: "Sleepwear Animals sets 735",
        imageSrc: "images/t3JhyLlHRhRDhokfrb43gPV3h1NsdXEKtxE833iguo4.jpg",
        prompt: "Crocodile Graphic Pajama Set, Asian Young Woman"
    },

    {
        no: 736,
        styleName: "Sleepwear Animals sets 736",
        imageSrc: "images/uGyJ3GEVVSvMv9ich-djsVtEnvca8l1CPOgaRXz-BHU.jpg",
        prompt: "Owl Hood + Pajama Dress, Asian Young Woman"
    },
    
    {
        no: 737,
        styleName: "Sleepwear Animals sets 737",
        imageSrc: "images/7lJ6Z27nsBLt1jWjvqdcFyLmg80rFTOCZXo0czdLjys.jpg",
        prompt: "Koala Nightshirt, Asian Young Woman"
    },
    
    {
        no: 738,
        styleName: "Sleepwear Animals sets 738",
        imageSrc: "images/2TwYa3wnrnmv8CUYX_DXmwOGb9fz_abzAFHqaQYdZnE.jpg",
        prompt: "Whale Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 739,
        styleName: "Sleepwear Animals sets 739",
        imageSrc: "images/WKDtmY8mUvLHPUQdbcyHYsOHYrvwOs9BqIfieY_z9eg.jpg",
        prompt: "Dolphin Pajama Top + Shorts, Asian Young Woman"
    },
    
    {
        no: 740,
        styleName: "Sleepwear Animals sets 740",
        imageSrc: "images/krnViHorRt7lj5q-5XI9M34DEmXR7UWGYdiJCeRLtr4.jpg",
        prompt: "Deer Ear Nightshirt, Asian Young Woman"
    },
    
    {
        no: 741,
        styleName: "Sleepwear Animals sets 741",
        imageSrc: "images/gPZry7UKIPjg_zVbuPm5H8uJKp0LoJOE5F-4HG2B_Dg.jpg",
        prompt: "Crow Graphic Pajama Set, Asian Young Woman"
    },
    
    {
        no: 742,
        styleName: "Sleepwear Animals sets 742",
        imageSrc: "images/lETwuY1DU2Y-RsydLnjCU4eBhOYtLfyY_QeEnI5pIE0.jpg",
        prompt: "Panda Foot Pajamas, Asian Young Woman"
    },
    
    {
        no: 743,
        styleName: "Sleepwear Animals sets 743",
        imageSrc: "images/sP23BUHb5iDNdq3L54lsdZOqXCFZXakzQibW6G7l5qQ.jpg",
        prompt: "Lizard Pattern Pajamas, Asian Young Woman"
    },
    
    {
        no: 744,
        styleName: "Sleepwear Animals sets 744",
        imageSrc: "images/1H1Bx7FK46KTS1jEOhsGzI6H60Zbioh8Yj6evLXfx-o.jpg",
        prompt: "Pig Hoodie Pajama Set, Asian Young Woman"
    },
    
    {
        no: 745,
        styleName: "Sleepwear Animals sets 745",
        imageSrc: "images/jbqX-hsBxbSA9U5slvW9vF-QHzmBVzaMGyIHyCYp2vg.jpg",
        prompt: "Llama Print Sleep Top + Pants, Asian Young Woman"
    },
    
    {
        no: 746,
        styleName: "Sleepwear Animals sets 746",
        imageSrc: "images/v0kn-vh28IRD5sc7hRz1jdspQGeTgzo8Mo9wbPpJrZg.jpg",
        prompt: "Shark Fin Pajama Dress, Asian Young Woman"
    },
    
    {
        no: 747,
        styleName: "Sleepwear Animals sets 747",
        imageSrc: "images/PA-dmcCO-vsKl4l1f1TKkGE2BdadftIYHUopPyltUhQ.jpg",
        prompt: "Dolphin Graphic Nightshirt, Asian Young Woman"
    },
    
    {
        no: 748,
        styleName: "Sleepwear Animals sets 748",
        imageSrc: "images/yV7c_s0WdkKxOHbofHCOnTY1p41ysHEigFh0HSrmt3c.jpg",
        prompt: "Elephant Ears Hooded Pajamas, Asian Young Woman"
    },
    
    {
        no: 749,
        styleName: "Sleepwear Animals sets 749",
        imageSrc: "images/IT0HWGOusR1u-q6rKfCjLLNsL4YwxmTKbiF7_hsQtU8.jpg",
        prompt: "Fish Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 750,
        styleName: "Sleepwear Animals sets 750",
        imageSrc: "images/ioJVaL_8XWLEb5_vUQEAh9GfyLYltpSLAPhWxVsog8s.jpg",
        prompt: "Mouse Pajama Top + Shorts, Asian Young Woman"
    },
    
    {
        no: 751,
        styleName: "Sleepwear Animals sets 751",
        imageSrc: "images/-P0eL683yQgVGtBUEY7rJ2gXD9FcbUOsPh66_QT6WBM.jpg",
        prompt: "Crocodile Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 752,
        styleName: "Sleepwear Animals sets 752",
        imageSrc: "images/f9MxD83CCxvfwcKAC8Aqia2RtidnwT2qOdwwB6uvoz0.jpg",
        prompt: "Zebra Ears Hoodie Pajamas, Asian Young Woman"
    },
    
    {
        no: 753,
        styleName: "Sleepwear Animals sets 753",
        imageSrc: "images/v9OP09tEoGaXpU6tobXCRm4URVQ313hdAO_caxvyS1s.jpg",
        prompt: "Panda Panda Hoodie + Pajamas, Asian Young Woman"
    },
    
    {
        no: 754,
        styleName: "Sleepwear Animals sets 754",
        imageSrc: "images/mpHA8K2LTShxcTc-A7G2jy7VVsP-216MC8Z7pPwI1bk.jpg",
        prompt: "Chameleon Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 755,
        styleName: "Sleepwear Animals sets 755",
        imageSrc: "images/NyBJcvn-ZTdrGJuWutz6gnaFDav9H3YMURgC0Zr9jFg.jpg",
        prompt: "Narwhal Sleep Top + Briefs, Asian Young Woman"
    },
    
    {
        no: 756,
        styleName: "Sleepwear Animals sets 756",
        imageSrc: "images/b8NQOLV8wARgfvgNDXolaqh65CIIehoxzQsXynvJIq4.jpg",
        prompt: "Sheep Pattern Pajama Set, Asian Young Woman"
    },
    
    {
        no: 757,
        styleName: "Sleepwear Animals sets 757",
        imageSrc: "images/LNDRNhcR9wA7IX2bWkOcNuHL5sk6Il6ppo0G3KitCLw.jpg",
        prompt: "Fox Ears Hoodie Pajama, Asian Young Woman"
    },
    
    {
        no: 758,
        styleName: "Sleepwear Animals sets 758",
        imageSrc: "images/wKQk_XwX7rOqwSL5scsEm6bPJFt8YiS_tPm8zZFw2mU.jpg",
        prompt: "Rabbit Ears Nightshirt, Asian Young Woman"
    },
    
    {

        no: 759,
        styleName: "Sleepwear Animals sets 759",
        imageSrc: "images/VoXbESlcr5xFx8ryVzaFD1rktvC_9eP4aNftMHNACU4.jpg",
        prompt: "Owl Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 760,
        styleName: "Sleepwear Animals sets 760",
        imageSrc: "images/AyeAyPlkh-EU-YSwd7l73zT6-6WNSW8uCOE6NRx2DMk.jpg",
        prompt: "Seahorse Graphic Pajama Set, Asian Young Woman"
    },
    
    {
        no: 761,
        styleName: "Sleepwear Animals sets 761",
        imageSrc: "images/HGAVdz9HrgUBTOvbJouzsvTpbxTI3bs8g169eewMa54.jpg",
        prompt: "Snail Print Pajamas, Asian Young Woman"
    },
    
    {
        no: 762,
        styleName: "Sleepwear Animals sets 762",
        imageSrc: "images/n3wELi5ukoh14sYvSeTobga2iXJIt5vWEdCUZSNgA-I.jpg",
        prompt: "Fawn Graphic Nightshirt, Asian Young Woman"
    },
    
    {
        no: 763,
        styleName: "Sleepwear Animals sets 763",
        imageSrc: "images/od1SgiML9txkzho519vAKXRuhgiAdkazHEIzvlmQjAc.jpg",
        prompt: "Flamingo Print Pajama Set, Asian Young Woman"
    },
    
    {
        no: 764,
        styleName: "Sleepwear Animals sets 764",
        imageSrc: "images/b1P2V0PtbtOKAIa19Fvr32vhYUzcBDtdsAfcJr1duys.jpg",
        prompt: "Panda Plush Pajama Set, Asian Young Woman"
    },
    
    {
        no: 765,
        styleName: "Sleepwear Animals sets 765",
        imageSrc: "images/qiHHGMqDXtTLsmTI56BpihDtzb4iUSeTzevawqeVGpY.jpg",
        prompt: "Giraffe Pajama Top + Shorts, Asian Young Woman"
    },
    
    {
        no: 766,
        styleName: "Sleepwear Animals sets 766",
        imageSrc: "images/HPovf4hByqPoVGce-IQlqSqEYBeZ8U8vyuz-ijAo3Yc.jpg",
        prompt: "Elephant Ears Pajama Set, Asian Young Woman"
    },
    
    {
        no: 767,
        styleName: "Sleepwear Animals sets 767",
        imageSrc: "images/1wTtzTbXUBc6e1rwkb1xm1bRFGDm6JdUhP_jCpHprSE.jpg",
        prompt: "Duckling Print Sleep Top + Pants, Asian Young Woman"
    },
    
    {
        no: 768,
        styleName: "Sleepwear Animals sets 768",
        imageSrc: "images/mLbHCrsq1Kujm841_yLFtGw45_DYN69V3wYYvNv3YgQ.jpg",
        prompt: "Zebra Ear Pajama Set, Asian Young Woman"
    },
    
    {
        no: 769,
        styleName: "Sleepwear Animals sets 769",
        imageSrc: "images/FNle3km1e2NRYfkxz_2qXYJCOWp2s3cUuZhBZJ2cKtQ.jpg",
        prompt: "Panda Ear Plush Pajama, Asian Young Woman"
    },
    
    {
        no: 770,
        styleName: "Sleepwear Animals sets 770",
        imageSrc: "images/LPgYWc8rqYc1VuWU7d7cBwm-9U3JFP3xrww2EopOsxU.jpg",
        prompt: "Asian young woman wearing Koala Print Pajama Set"
    },
    {
        no: 771,
        styleName: "Sleepwear Animals sets 771",
        imageSrc: "images/TJBIf8Q-Qajrh8yPo6v-bz3hl12nc1l23L3QNcvDBUw.jpg",
        prompt: "Sheep Embroidered Pajama Set, Asian Young Woman"
    },
    {
        no: 772,
        styleName: "Sleepwear Animals sets 772",
        imageSrc: "images/mjiPTdyVFNHJ-aCnaZZGeLgNvoADsWPIPouQUgeG7m4.jpg",
        prompt: "Bear Paw Pajama Set, Asian Young Woman"
    },
    {
        no: 773,
        styleName: "Sleepwear Animals sets 773",
        imageSrc: "images/M7iAjIPNoF47bJiY5EPzfvXu2D8s9C1BQypycuHD-wo.jpg",
        prompt: "Deer Ear Hoodie Pajamas, Asian Young Woman"
    },
    // ... and so on



        {
            no: 7981,
            styleName: "sexy Hybrid Cloth sets 7981",
            imageSrc: "images/aL5b4zpjz7eqo4EUdWwYmUxFpD79l2VqnxehxupcJgs.jpg",
            prompt: "Lace Bralette + Leather Skinny Pants"
        },
        {
            no: 7982,
            styleName: "sexy Hybrid Cloth sets 7982",
            imageSrc: "images/VVnQSwzzg0-bFYnv13pfeH8hxrdWe4xQyWAkJvQo9g4.jpg",
            prompt: "Satin Slip Dress + Denim Jacket"
        },
        {
            no: 7983,
            styleName: "sexy Hybrid Cloth sets 7983",
            imageSrc: "images/Owd0PdLFVFdumss3awLyrTUJoPNDOtIi6Z8krLkqxkY.jpg",
            prompt: "Mesh Bodysuit + Silk Palazzo Pants"
        },
        {
            no: 7984,
            styleName: "sexy Hybrid Cloth sets 7984",
            imageSrc: "images/20t-IuZUXswuaiRfs8yLA8TiuPt8kLgqBpLSWQvdzaE.jpg",
            prompt: "Corset Top + Tulle Skirt"
        },
        {
            no: 7985,
            styleName: "sexy Hybrid Cloth sets 7985",
            imageSrc: "images/e86JAci5hySfuhN_req5bWomU9V8Q_TrtYVLzrovZmw.jpg",
            prompt: "Ribbed Knit Top + Leather Mini Skirt"
        },
        {
            no: 7986,
            styleName: "sexy Hybrid Cloth sets 7986",
            imageSrc: "images/jnDK-JIp81Dd4qvHEKzCNMa0RY1ZWcGlH7u-1sIfVwc.jpg",
            prompt: "Sheer Lace Bodysuit + High-Waisted Tailored Shorts"
        },
        {
            no: 7987,
            styleName: "sexy Hybrid Cloth sets 7987",
            imageSrc: "images/s0Eyar39T21dkD5_DaBoaETd0-Z_b9hMLANLXHqHQ8o.jpg",
            prompt: "Velvet Crop Top + Cargo Joggers"
        },
        {
            no: 7988,
            styleName: "sexy Hybrid Cloth sets 7988",
            imageSrc: "images/nU-igxw7x3MahJp-VntuQJZLm9C9Io-2Iap_2mfKzO4.jpg",
            prompt: "Silk Camisole + Distressed Denim Skirt"
        },
        {
            no: 7989,
            styleName: "sexy Hybrid Cloth sets 7989",
            imageSrc: "images/oOYQJ2duhhR4E7Zf3zt29bXqtSxeEvRbo1JruJBgerI.jpg",
            prompt: "Denim Bustier + Satin Midi Skirt"
        },
        {
            no: 7990,
            styleName: "sexy Hybrid Cloth sets 7990",
            imageSrc: "images/hClJp4x-_ytMKyHxNg43-O1gWrY0lnAaBkzweGCXrpg.jpg",
            prompt: "Chainmail Halter Top + Leather Leggings"
        },
        {
            no: 7991,
            styleName: "sexy Hybrid Cloth sets 7991",
            imageSrc: "images/Z8pSaVyFNOcYOgIil89fVJb2IJ7t28hVdfeTiVLCsr8.jpg",
            prompt: "Sequin Bralette + Oversized Blazer"
        },
        {
            no: 7992,
            styleName: " sexy Hybrid Cloth sets 7992",
            imageSrc: "images/ByWkBbXZd71MBK1dZcLQ1o9F5n4BYVZFcJDyqwQAN74.jpg",
            prompt: "Sheer Mesh Top + Velvet Trousers"
        },
        {
            no: 7993,
            styleName: "sexy Hybrid Cloth sets 7993",
            imageSrc: "images/3y1z2b6EEWVu0cPYbPvWccLjcMzmjhYRfEelrfhK-44.jpg",
            prompt: "Satin Robe + High-Slit Skirt"
        },
        {
            no: 7994,
            styleName: "sexy Hybrid Cloth sets 7994",
            imageSrc: "images/NFubEPIsIjZpSi--1KDMPnoLuzMaLkhPAQdCNNhLaLg.jpg",
            prompt: "Faux Fur Jacket + Silk Slip Dress"
        },
        {
            no: 7995,
            styleName: "sexy Hybrid Cloth sets 7995",
            imageSrc: "images/rk7oHveh9Sk3EDff27oIUTuj0p6vMJsYGXc-By2uCNE.jpg",
            prompt: "Embroidered Lace Top + Pleated Maxi Skirt"
        },
        {
            no: 7996,
            styleName: "sexy Hybrid Cloth sets 7996",
            imageSrc: "images/oSFRKxM-CxorH7ZzkeCrYeqC5huY8-aQ3HhSGRYUTRk.jpg",
            prompt: "Corset Dress + Knee-High Boots"
        },
        {
            no: 7997,
            styleName: "sexy Hybrid Cloth sets 7997",
            imageSrc: "images/6iAmpNsCT6ENzmPz1dA9Wmx-_oYyiXmVze86Ss12qjg.jpg",
            prompt: "Satin Blouse + Leather Pencil Skirt"
        },
        {
            no: 7998,
            styleName: "sexy Hybrid Cloth sets 7998",
            imageSrc: "images/9gIMcfQ0saFRd4SI82Lz0k4_LuRbnqojvLfI4EZTlg4.jpg",
            prompt: "Turtleneck Bodysuit + Vinyl Skirt"
        },
        {
            no: 7999,
            styleName: "sexy Hybrid Cloth sets 7999",
            imageSrc: "images/laD6FnplS6Hdia0KMV8icQCYWvCN9YQslZoStYKLLzs.jpg",
            prompt: "Silk Pajama Shirt + Skinny Jeans"
        },
        {
            no: 8000,
            styleName: "sexy Hybrid Cloth sets 8000",
            imageSrc: "images/OgJMegc-wZEHPNwymr250b8YiDhtd7yZYX-oEdXNRAM.jpg",
            prompt: "Off-the-Shoulder Knit + Cargo Pants"
        },
        {
            no: 8001,
            styleName: "sexy Hybrid Cloth sets 8001",
            imageSrc: "images/PIh9lE7uteXlbKTnfS0cxDeHcR01_cnXLDebgOTQbZA.jpg",
            prompt: "Rhinestone Bustier + High-Waisted Jeans"
        },
        {
            no: 8002,
            styleName: "sexy Hybrid Cloth sets 8002",
            imageSrc: "images/S_RVZCMHWqeYgHClv2J8h_hz9xLwGzRvYaqYohmOMjE.jpg",
            prompt: "Lace-Up Top + Satin Joggers"
        },
        {
            no: 8003,
            styleName: "sexy Hybrid Cloth sets 8003",
            imageSrc: "images/xjGGUzcYH2g4rnfFLO_jfPhpTy9WjnhWXsEw79ckllA.jpg",
            prompt: "Metallic Top + Tulle Skirt"
        },
        {
            no: 8004,
            styleName: "sexy Hybrid Cloth sets 8004",
            imageSrc: "images/fg7RMLV0YYx9avkxjGoFjFUtR8xokKT2HI8Vi23jClM.jpg",
            prompt: "Velvet Bodysuit + Denim Shorts"
        },
        {
            no: 8005,
            styleName: "sexy Hybrid Cloth sets 8005",
            imageSrc: "images/9gaNjCloPQ9qGpqx0fqczcaqOesLW7NmbVpeaCKaHbY.jpg",
            prompt: "Sheer Sleeve Bodice + Relaxed Trousers"
        },
        {
            no: 8006,
            styleName: "sexy Hybrid Cloth sets 8006",
            imageSrc: "images/wxGj1GqXBgwV53Y6O7Feqb5N2sM3WjSN4oJeSiqV6FE.jpg",
            prompt: "Silk Bralette + Wide-Leg Pants"
        },
        {
            no: 8007,
            styleName: "sexy Hybrid Cloth sets 8007",
            imageSrc: "images/Yn6gqWAFjbfeQb4BN6K6N6fQ_dLCxA75eB6x_MIJI4U.jpg",
            prompt: "Sequin Dress + Leather Jacket"
        },
        {
            no: 8008,
            styleName: "sexy Hybrid Cloth sets 8008",
            imageSrc: "images/DTi_2Q78e-QxT4VJmBH5SHEpv6OMd0smF6jzktCJ16M.jpg",
            prompt: "Sheer Crop Top + Satin Shorts"
        },
        {
            no: 8009,
            styleName: "sexy Hybrid Cloth sets 8009",
            imageSrc: "images/Clnhvt2t-dj7uC74fzCgbqU4ITxB48Z8WhCB2GTtBFU.jpg",
            prompt: "Wool Blazer + Lace-Trimmed Camisole"
        }
    ];


    // Function to render table rows
    function renderTableRows(data) {
        tbody.innerHTML = ''; // Clear existing rows
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.no}</td>
                <td>${item.styleName}</td>
                <td>
                    <img alt="Young Khmer woman wearing ${item.styleName}" height="50" src="${item.imageSrc}" width="50">
                </td>
                <td>${item.prompt}</td>
            `;
            tbody.appendChild(row);
        });
    }

    renderTableRows(tableData); // Initial render

    // Add search functionality
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('input', function() {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredData = tableData.filter(item => 
            item.styleName.toLowerCase().includes(searchTerm) || 
            item.prompt.toLowerCase().includes(searchTerm)
        );
        renderTableRows(filteredData); // Render filtered rows
    });

    table.appendChild(tbody);
}

// Function to toggle between container2 and container3
function toggleContainers() {
    const container2 = document.querySelector('.container2');
    const container3 = document.querySelector('.container3');
    const toggleCheckbox = document.getElementById('toggleContainer');

    if (toggleCheckbox.checked) {
        container2.style.display = 'none'; // Hide container2
        container3.style.display = 'block'; // Show container3
    } else {
        container2.style.display = 'block'; // Show container2
        container3.style.display = 'none'; // Hide container3
    }
}

// Initialize the page
window.onload = function () {
    createTableContent(); // Create and append table content to container3
    createSelects(); // Create dynamic selects
    createTable(); // Create the table in container2

    // Add event listener to the checkbox
    document.getElementById('toggleContainer').addEventListener('change', toggleContainers);
};
